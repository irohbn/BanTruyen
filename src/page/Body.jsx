function Body() {
  return (
    <div>
      <div className="custom">
        <p className="h1 text-center mt-3 mb-3">Sách mới</p>
        <div className="bok ">
          <a href="#" className="sale">
            {" "}
            <img src="./public/img/b1.jpg"></img>
            <p>
              Xứ Sở Sương Mù - Cuộc <br></br> truy tầm Keo Dán Kí Ức
            </p>
            <span className="prince">94,500đ</span> <s>105,000đ</s>
          </a>
          <a href="#" className="sale">
            {" "}
            <img src="./public/img/b2.webp"></img>
            <p>
              Chuột típ không muốn <br></br> chải răng
            </p>
            <span className="prince">22,500đ</span> <s>25,000đ</s>
          </a>
          <a href="#" className="sale">
            {" "}
            <img src="./public/img/b3.webp"></img>
            <p>Siêu nhân cua</p>
            <span className="prince">45,000đ</span> <s>50,000đ</s>
          </a>
          <a href="#" className="sale">
            {" "}
            <img src="./public/img/b4.jpg"></img>
            <p>Pokemon</p>
            <span className="prince">31,500đ</span> <s>35,000đ</s>
          </a>
          <a href="#" className="sale">
            {" "}
            <img src="./public/img/b4.webp"></img>
            <p>Tý Quậy</p>
            <span className="prince">36,000đ</span> <s>40,000đ</s>
          </a>
        </div>
      </div>
      {/* 2 */}
      <div className="custom2">
        <p className="h2 text-center mt-3 mb-3">Sách bán chạy</p>
        <div className="bok ">
          <a href="#" className="sale">
            {" "}
            <img src="./public/img/conan.jpg"></img>
            <p>Conan</p>
            <span className="prince">94,500đ</span> <s>105,000đ</s>
          </a>
          <a href="#" className="sale">
            {" "}
            <img src="./public/img/doremon.jpg"></img>
            <p>
              Doraemon Nobita và nước <br></br> Nhật thời nguyên thủy
            </p>
            <span className="prince">22,500đ</span> <s>25,000đ</s>
          </a>
          <a href="#" className="sale">
            {" "}
            <img src="./public/img/kaitokid.jpg"></img>
            <p>Kaitokid</p>
            <span className="prince">45,000đ</span> <s>50,000đ</s>
          </a>
          <a href="#" className="sale">
            {" "}
            <img src="./public/img/makuro.jpg"></img>
            <p>Makuro</p>
            <span className="prince">31,500đ</span> <s>35,000đ</s>
          </a>
          <a href="#" className="sale">
            {" "}
            <img src="./public/img/akai.jpg"></img>
            <p>Suichi akai</p>
            <span className="prince">36,000đ</span> <s>40,000đ</s>
          </a>
        </div>
      </div>
      {/* quang cao */}
      <div className="banner mt-5">
        <img src="./public/img/banner.webp" className="mx-auto"></img>
      </div>
      {/* sach combo */}
      <div className="custom3">
        <p className="h2 text-center mt-3 mb-3">Combo</p>
        <div className="bok ">
          <a href="#" className="sale">
            {" "}
            <img src="./public/img/cb1.jpg"></img>
            <p>
              Combo Yona - Công chúa <br></br>bình minh (12 tập)
            </p>
            <span className="prince">270,000đ</span> <s>300,000đ</s>
          </a>
          <a href="#" className="sale">
            {" "}
            <img src="./public/img/cb2.webp"></img>
            <p>
              Combo Siêu quậy Teppei <br></br>(31 tập)
            </p>
            <span className="prince">679,500đ</span> <s>775,000đ</s>
          </a>
          <a href="#" className="sale">
            {" "}
            <img src="./public/img/cb3.webp"></img>
            <p>
              Combo Siêu đầu bếp nhí <br></br>(4 quyển)
            </p>
            <span className="prince">160,000đ</span> <s>200,000đ</s>
          </a>
          <a href="#" className="sale">
            {" "}
            <img src="./public/img/cb4.webp"></img>
            <p>Doraemon BoxSet 1-4</p>
            <span className="prince">810,000đ</span> <s>900,000đ</s>
          </a>
        </div>
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
