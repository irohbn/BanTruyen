import fastify from "fastify";
import fastifyMongodb from "@fastify/mongodb";
import fastifyFormbody from "@fastify/formbody";
import fastifyView from "@fastify/view";
import pug from "pug";
import fastifystatic from "@fastify/static";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fastifyMultipart from "@fastify/multipart";
import fs from "fs";
import { promisify } from "util";
import { pipeline } from "stream";
import fastifyCors from "@fastify/cors";

//mulipart setting
const pump = promisify(pipeline); //dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fastifyApp = fastify({
  logger: true,
  disableRequestLogging: true,
});
const { ObjectId } = fastifyMongodb;
//plugin
fastifyApp.register(fastifyMongodb, {
  forceClose: true, //tu dong app khi dung lai
  url: "mongodb://localhost:27017/ListBook",
});
fastifyApp.register(fastifyFormbody, {});

fastifyApp.register(fastifyView, {
  engine: {
    pug: pug,
  },
  root: "AUD",
  propertyName: "render",
});
fastifyApp.register(fastifystatic, {
  root: path.join(__dirname, "src2"),
  prefix: "/static/",
});

fastifyApp.register(fastifyMultipart, {
  attachFieldsToBody: true,
  limits: {
    fieldSize: 10 * 1024 * 1024, //
  },
});

fastifyApp.register(fastifyCors, {
  origin: "*", // Cho phép tất cả domain (trong môi trường dev)
});
// route
fastifyApp.get("/", function (req, rep) {
  rep.send("hello");
});

//return list book
fastifyApp.get("/books", async function (req, rep) {
  const books = await this.mongo.db.collection("books").find().toArray();
  rep.send({ books }); // Send the books data as JSON
});

//create new book
fastifyApp.post("/book", async function (req, rep) {
  //save to Db
  const result = await this.mongo.db.collection("books").insertOne(req.body);

  rep.redirect("/books");
});

//put update
fastifyApp.post("/book/:id", async function (req, rep) {
  const data = req.body;

  // Kiểm tra xem người dùng có tải lên avatar mới không
  if (data.avatar && data.avatar.filename !== "") {
    const avatarPath = data.avatar.filename;
    await pump(
      data.avatar.toBuffer(),
      fs.createWriteStream("AUD/src2/img/" + avatarPath)
    );
    data.avatar = "/static/img/" + avatarPath;
  } else {
    // Lấy avatar hiện tại từ cơ sở dữ liệu nếu không có ảnh mới
    const book = await this.mongo.db
      .collection("books")
      .findOne({ _id: new ObjectId(req.params.id) });
    data.avatar = book.avatar;
  }

  // Thực hiện cập nhật các thông tin khác của truyen
  const result = await this.mongo.db.collection("books").updateOne(
    { _id: new ObjectId(req.params.id) },
    {
      $set: {
        title: data.title.value,
        price: data.price.value,
        originalPrice: data.originalPrice.value,
        Ma: data.Ma.value,
        TacGia: data.TacGia.value,
        avatar: data.avatar,
        KhuonKho: data.KhuonKho.value,
        SoTrang: data.DinhDang.value,
        DinhDang: data.DinhDang.value,
        TrongLuong: data.TrongLuong.value,
        Theloai: data.Theloai.value,
      },
    }
  );

  rep.redirect("/books");
});

//delete
fastifyApp.get("/book/:id", async function (req, rep) {
  const result = await this.mongo.db
    .collection("books")
    .deleteOne({ _id: new ObjectId(req.params.id) });
  rep.redirect("/books");
});

fastifyApp.get("/create-book", function (req, rep) {
  rep.render("/create-book");
});

fastifyApp.get("/update-book/:id", async function (req, rep) {
  const book = await this.mongo.db
    .collection("books")
    .findOne({ _id: new ObjectId(req.params.id) });
  rep.render("update-book", { book });
  return rep;
});
// run port
fastifyApp.listen({ port: 3000 }, (err) => {
  if (err) {
    fastifyApp.log.error(err);
    process.exit(1);
  }
});
