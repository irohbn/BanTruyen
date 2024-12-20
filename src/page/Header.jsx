import "bootstrap/dist/css/bootstrap.min.css"; // Import CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import JS (bao gồm Popper)
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import useToggleMenu from "../JS/useToggleMenu";
import { useAuth } from "../JS/auth/auth";
import Login from "./LoginPage";
import Register from "./RegisterPage";
import { Navigate, useNavigate, Link } from "react-router-dom";

function Header({ cartBooks }) {
  const { isMenuOpen, toggleMenu } = useToggleMenu(); //menu
  const [showLogin, setShowLogin] = useState(false); //dang nhap
  const [showRegister, setShowRegister] = useState(false); //dang ky
  const [searchState, setSearch] = useState(""); //timkiem
  const [showCart, setShowCart] = useState(false); //gio hang
  const navigate = useNavigate();
  const { auth, logout } = useAuth();

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  const handleRegisterClose = () => setShowRegister(false);
  const handleRegisterShow = () => setShowRegister(true);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const handleSearchSubmitForm = (event) => {
    event.preventDefault();
    navigate(`/search?query=${searchState}`);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="headerr">
      <div className="footer1  ">
        <div className="social">
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        <div className="welcome">
          <p>
            Welcome to FOUR book page ! Nếu cần giúp đỡ, hãy liên hệ ngay với
            chúng tôi qua thông tin sau:
          </p>
        </div>
        <div className="contact">
          <a href="tel:1900571596">
            <i className="fa-solid fa-phone-volume"></i> (+84) 1900571596
          </a>
          <a href="mailto:fourbook@gmail.com">
            <i className="fa-solid fa-envelope"></i> fourbook@gmail.com
          </a>
        </div>
      </div>
      {/* nav */}
      <div className="testnav ">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="public/img/logo_four.png" />
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
                  <Link className="nav-link active fs-5" to="/">
                    Trang chủ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active fs-5" to="/shop">
                    Cửa Hàng
                  </Link>
                </li>
              </ul>
              {/* Search của Kiên */}
              <form
                className="d-flex mt-1 me-5"
                role="search"
                onSubmit={handleSearchSubmitForm}
              >
                <input
                  className="form-control me-2   "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(event) => setSearch(event.target.value)}
                />
                <button className="btn btn-outline-success " type="submit">
                  Search
                </button>
              </form>

              {/* dang nhap dang ky */}

              <div className="log nav-item d-flex ">
                {auth ? (
                  <>
                    <a href="#" className="user-info">
                      <i className="fa fa-user"></i> {auth.user.lastName}
                    </a>
                    <a href="#" className="logout-btn" onClick={handleLogout}>
                      <i className="fa fa-sign-out-alt"></i> Đăng xuất
                    </a>
                  </>
                ) : (
                  <>
                    <a href="#" className="login" onClick={handleLoginShow}>
                      <i className="fa-solid fa-right-to-bracket"></i>Đăng nhập
                    </a>
                    {showLogin && (
                      <Login
                        show={showLogin}
                        onClose={handleLoginClose}
                        onSwitchToRegister={handleRegisterShow}
                      />
                    )}

                    <a
                      href="#"
                      className="register-btn"
                      onClick={handleRegisterShow}
                    >
                      <i className="fas fa-edit"></i>Đăng ký
                    </a>
                    {showRegister && (
                      <Register
                        show={showRegister}
                        onClose={handleRegisterClose}
                        onSwitchToLogin={handleLoginShow}
                      />
                    )}
                  </>
                )}
              </div>
              {/* gio hang cua Anh */}
              <div>
                <a
                  href="#"
                  onClick={toggleCart}
                  className="giohang nav-link me-5 ms-2 "
                >
                  <i className="fa-solid fa-bag-shopping"></i>
                  <span className="count">
                    {cartBooks.reduce((total, book) => total + book.count, 0)}
                  </span>
                </a>
                {showCart && (
                  <div className="cart-form-container">
                    <form className="cart-form">
                      <button
                        type="button"
                        className="close-btn"
                        onClick={() => setShowCart(false)}
                      >
                        ✖
                      </button>
                      <h4>Giỏ hàng</h4>
                      <table>
                        <thead>
                          <tr>
                            <th>Sản phẩm</th>
                            <th>Giá</th>
                            <th>SL</th>
                            <th>Chọn</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartBooks.map((book, index) => (
                            <tr key={index}>
                              <td className="product-row">
                                <img src={book.img} alt="" />
                                {book.title}
                              </td>
                              <td>
                                <p>
                                  <span>{book.price}</span>
                                  <sup>đ</sup>
                                </p>
                              </td>
                              <td className="number-input-row">
                                <input
                                  type="number"
                                  value={book.count}
                                  min={1}
                                />
                              </td>
                              <td className="delete-cell"> Xóa</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <div className="price-total">
                        <p>
                          Tổng tiền:
                          <span>
                            {cartBooks
                              .reduce((total, book) => {
                                return (
                                  total + parseFloat(book.price) * book.count
                                );
                              }, 0)
                              .toFixed(3)}
                          </span>
                          <sup>đ</sup>
                        </p>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
      <hr></hr>
    </div>
  );
}

export default Header;
