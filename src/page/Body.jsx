import { Link } from "react-router-dom";
import { newBooks, bestSellers, Combo, Manga } from "../JS/testbook";

<<<<<<< HEAD
function BookList({ title, books, addToCart }) {
=======
<<<<<<< HEAD
function BookList({ title, books, addToCart }) {
=======
function BookList({ title, books }) {
>>>>>>> b61e13314d349c2527d27c99b207118d8d95c1b8
  const limitedBooks = [];
  for (let i = 0; i < books.length && i < 5; i++) {
    limitedBooks.push(
      <a href="#" className="sale" key={i}>
        <img src={books[i].img} alt={books[i].title} />
        <p>{books[i].title}</p>
        <span className="prince">{books[i].price}</span>{" "}
        <s>{books[i].originalPrice}</s>
      </a>
    );
  }

  // Trả về JSX
>>>>>>> 7db4d0db5a6bcb3c3d8d3962f2969fba1218f4fb
  return (
    <div className="custom">
      <p className="h1 text-center mt-3 mb-3">{title}</p>
      <div className="bok">
        {books.map((book, index) => (
<<<<<<< HEAD
          <div className="sale" key={index}>
            <img src={book.img} alt={book.title} />
            <p>{book.title}</p>

            <span className="prince">{book.price}</span>{" "}
            <s>{book.originalPrice}</s>
            <button
              key={index}
              onClick={() => addToCart(book)}
            >
              <i className="fa-solid fa-cart-shopping "></i> Thêm vào giỏ hàng
            </button>
          </div>
=======
          <Link to={`/product/${book.title}`} className="sale" key={index}>
            <img src={`./public/img/${book.img}`} alt={book.title} />
            <p>{book.title}</p>
            <button key={index} onClick={() => addToCart(book)}>
              <i className="fa-solid fa-cart-shopping "></i>
            </button>
            <span className="prince">{book.price}</span>{" "}
            <s>{book.originalPrice}</s>
          </Link>
>>>>>>> 7db4d0db5a6bcb3c3d8d3962f2969fba1218f4fb
        ))}
      </div>
    </div>
  );
}
<<<<<<< HEAD
function Body({ onCartChange }) {
  return (
    <div>
      <div id="slider">
=======
function Body({onCartChange}) {
  return (
    <div>
<<<<<<< HEAD
      <BookList title="Sách mới" books={newBooks}  addToCart={onCartChange}/>
      <BookList title="Sách bán chạy" books={bestSellers} addToCart={onCartChange}/>
=======
    <div id="slider">
>>>>>>> b61e13314d349c2527d27c99b207118d8d95c1b8
        <figure>
          <img src="./public/img/slider1.webp" alt="" />
          <img src="./public/img/slider2.webp" alt="" />
          <img src="./public/img/slider3.webp" alt="" />
          <img src="./public/img/slider4.webp" alt="" />
        </figure>
      </div>
<<<<<<< HEAD
      <BookList title="Sách mới" books={newBooks} addToCart={onCartChange} />
      <BookList
        title="Sách bán chạy"
        books={bestSellers}
        addToCart={onCartChange}
      />
=======
      <BookList title="Sách mới" books={newBooks} />
      <BookList title="Sách bán chạy" books={bestSellers} />
>>>>>>> 7db4d0db5a6bcb3c3d8d3962f2969fba1218f4fb
>>>>>>> b61e13314d349c2527d27c99b207118d8d95c1b8
      {/* quang cao */}
      <div className="banner mt-5">
        <img src="./public/img/banner.webp" className="mx-auto"></img>
      </div>
<<<<<<< HEAD
      <BookList title="Combo" books={Combo} addToCart={onCartChange} />
      <div className="banner mt-5">
        <img src="./public/img/bannermanga.webp" className="mx-auto"></img>
      </div>
      <BookList title="Manga" books={Manga} addToCart={onCartChange} />
=======
      <BookList title="Combo" books={Combo} addToCart={onCartChange}/>
      <div className="banner mt-5">
        <img src="./public/img/bannermanga.webp" className="mx-auto"></img>
      </div>
      <BookList title="Manga" books={Manga} addToCart={onCartChange}/>
>>>>>>> b61e13314d349c2527d27c99b207118d8d95c1b8

      <div className="ship">
        <div className="container text-center my-5">
          <h2>Dịch vụ cửa hàng trực tuyến</h2>
          <p>Toàn bộ ưu đãi của chúng tôi chỉ cách bạn 1 cú click chuột</p>
          <div className="row mt-4">
            {/* Service 1 */}
            <div className="col-md-3">
              <i className="fa-solid fa-truck on"></i>
              <h5 className="mt-3">Free ship từ đơn 100,000đ</h5>
            </div>
            {/* Service 2 */}
            <div className="col-md-3">
              <i className="fa-solid fa-headphones on"></i>
              <h5 className="mt-3">Trung tâm trợ giúp</h5>
            </div>
            {/* Service 3 */}
            <div className="col-md-3">
              <i className="fa-solid fa-book on"></i>
              <h5 className="mt-3">60 ngày thử hàng</h5>
            </div>
            {/* Service 4 */}
            <div className="col-md-3">
              <i className="fa-solid fa-cart-shopping on"></i>
              <h5 className="mt-3">Thanh toán an toàn 100%</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { BookList };
export default Body;
