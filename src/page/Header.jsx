import "bootstrap/dist/css/bootstrap.min.css"; // Import CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import JS (bao gồm Popper)
function Header() {
  return (
    <div className="headerr">
      <div className="footer1">
        <div className="social">
          <a href="#">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className="welcome">
          <p>Welcome to ADHK book page</p>
        </div>
        <div className="contact">
          <a href="tel:1900571596">
            <i class="fa-solid fa-phone-volume"></i>(+84) 1900571596
          </a>
          <a href="mailto:AHDKbook@gmail.com">
            <i class="fa-solid fa-envelope"></i>AHDKbook@gmail.com
          </a>
        </div>
      </div>
      <div className="container-fluid">
        <div className="nav-left">
          <img src="./public/img/ADHK.jfif"></img>
        </div>
        <div className="nav-mid">
          <nav className="d-flex">
            <ul className="d-flex">
              <li>
                <a href="#">Trang chủ</a>
              </li>
              <li>
                <a href="#">Cửa hàng</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="nav-right ">
          <div className="search">
            <input type="text" placeholder="Search" className="TimKiem"></input>
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
        {/* log */}
        <div className="log">
          <a href="#" className="login">
            <i class="fa-solid fa-right-to-bracket"></i>Đăng nhập
          </a>
          <a href="#">
            <i class="fas fa-edit"></i>Đăng ký
          </a>
        </div>
        {/* gio hang */}
        <div className="giohang">
          <a href="#">
            <i class="fa-solid fa-bag-shopping"></i>
            <span className="count">0</span>
          </a>
        </div>
      </div>
      <div id="slider">
        <figure>
          <img src="./public/img/slider1.webp" alt="" />
          <img src="./public/img/slider2.webp" alt="" />
          <img src="./public/img/slider3.webp" alt="" />
          <img src="./public/img/slider4.webp" alt="" />
        </figure>
      </div>
    </div>
  );
}

export default Header;
