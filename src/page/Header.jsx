import "bootstrap/dist/css/bootstrap.min.css"; // Import CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import JS (bao gồm Popper)
import useToggleMenu from "../JS/useToggleMenu";
function Header() {
  const { isMenuOpen, toggleMenu } = useToggleMenu();
  return (
    <div className="headerr">
      <div className="footer1  ">
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
      {/* nav */}
      <div className="testnav ">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              ADHK
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? (
                <span style={{ fontSize: "24px" }}>✖</span> // Icon "X"
              ) : (
                <span className="navbar-toggler-icon"></span> // Default Hamburger icon
              )}
            </button>
            <div
              className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
              id="navbarScroll"
            >
              <ul
                className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                style={{ "--bs-scroll-height": "100px" }}
              >
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Trang chủ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Cửa Hàng
                  </a>
                </li>
              </ul>
              {/* login cua Hung */}
              <div className="log nav-item d-flex ">
                <a href="#" className=" nav-link me-4 ">
                  <i class="fa-solid fa-right-to-bracket"></i>Đăng nhập
                </a>
                <a href="#" className="nav-link me-5 ">
                  <i class="fas fa-edit"></i>Đăng ký
                </a>
              </div>
              {/* gio hang cua Anh */}
              <a href="#" className="giohang nav-link me-5 ">
                <i class="fa-solid fa-bag-shopping"></i>
                <span className="count">0</span>
              </a>
              {/* gio hang cua Anh */}
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <hr></hr>
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
