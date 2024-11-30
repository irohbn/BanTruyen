import { books } from "../JS/book"; // Import dữ liệu sách

// Hàm render 5 quyển đầu
function renderFirstFiveBooks() {
  const firstFiveBooks = books.slice(0, 5);
  return firstFiveBooks.map((book, index) => (
    <a href="#" className="sale" key={index}>
      <img src={book.img} alt={book.title} />
      <p>{book.title}</p>
      <span className="prince">{book.price}</span> <s>{book.originalPrice}</s>
    </a>
  ));
}

// Hàm render 5 quyển tiếp theo
function renderNextFiveBooks() {
  const nextFiveBooks = books.slice(5, 10);
  return nextFiveBooks.map((book, index) => (
    <a href="#" className="sale" key={index}>
      <img src={book.img} alt={book.title} />
      <p>{book.title}</p>
      <span className="prince">{book.price}</span> <s>{book.originalPrice}</s>
    </a>
  ));
}

// Hàm render 4 quyển cuối
function renderLastFourBooks() {
  const lastFourBooks = books.slice(10, 14);
  return lastFourBooks.map((book, index) => (
    <a href="#" className="sale" key={index}>
      <img src={book.img} alt={book.title} />
      <p>{book.title}</p>
      <span className="prince">{book.price}</span> <s>{book.originalPrice}</s>
    </a>
  ));
}

function Body() {
  return (
    <div>
      {/* Phần 1: 5 Quyển đầu */}
      <div className="custom">
        <p className="h1 text-center mt-3 mb-3">Sách mới</p>
        <div className="bok">{renderFirstFiveBooks()}</div>
      </div>

      {/* Phần 2: 5 Quyển tiếp theo */}
      <div className="custom2">
        <p className="h1 text-center mt-3 mb-3">Sách bán chạy</p>
        <div className="bok">{renderNextFiveBooks()}</div>
      </div>

      {/* quang cao */}
      <div className="banner mt-5">
        <img src="./public/img/banner.webp" className="mx-auto"></img>
      </div>
      {/* Phần 3: 4 Quyển cuối */}
      <div className="custom3">
        <p className="h1 text-center mt-3 mb-3">Combo</p>
        <div className="bok">{renderLastFourBooks()}</div>
      </div>
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
