import { newBooks, bestSellers, Combo, Manga } from "../JS/testbook";

function BookList({ title, books }) {
  return (
    <div className="custom">
      <p className="h1 text-center mt-3 mb-3">{title}</p>
      <div className="bok">
        {books.map((book, index) => (
          <a href="#" className="sale" key={index}>
            <img src={book.img} alt={book.title} />
            <p>{book.title}</p>
            <span className="prince">{book.price}</span>{" "}
            <s>{book.originalPrice}</s>
          </a>
        ))}
      </div>
    </div>
  );
}
function Body() {
  return (
    <div>
      <BookList title="Sách mới" books={newBooks} />
      <BookList title="Sách bán chạy" books={bestSellers} />
      {/* quang cao */}
      <div className="banner mt-5">
        <img src="./public/img/banner.webp" className="mx-auto"></img>
      </div>
      <BookList title="Combo" books={Combo} />
      <div className="banner mt-5">
        <img src="./public/img/bannermanga.webp" className="mx-auto"></img>
      </div>
      <BookList title="Manga" books={Manga} />

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
export default Body;
