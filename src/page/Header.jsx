import "bootstrap/dist/css/bootstrap.min.css"; // Import CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import JS (bao gồm Popper)
import useToggleMenu from "../JS/useToggleMenu";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header({ cartBooks }) {
  const { isMenuOpen, toggleMenu } = useToggleMenu();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCart, setShowCart] = useState(false);
  
  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  const handleRegisterClose = () => setShowRegister(false);
  const handleRegisterShow = () => setShowRegister(true);

  const toggleCart = () => {
    setShowCart(!showCart);
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
          <p>Welcome to FOUR book page ! Nếu cần giúp đỡ, hãy liên hệ ngay với chúng tôi qua thông tin sau:</p>
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
              <form className="d-flex mt-1 me-5" role="search">
                <input
                  className="form-control me-2   "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success " type="submit">
                  Search
                </button>
              </form>

              {/* dang nhap dang ky */}
              <div className="log nav-item d-flex ">
                <a
                  href="#"
                  className=" nav-link me-4 mb-1 fs-5 dn"
                  onClick={handleLoginShow}
                >
                  <i className="fa-solid fa-right-to-bracket"></i>Đăng nhập
                </a>
                <Modal
                  show={showLogin}
                  onHide={handleLoginClose}
                  dialogClassName="custom-modal"
                >
                  <Modal.Header closeButton>
                    <Modal.Title className="custom-title">
                      Đăng nhập
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form className="custom-form">
                      <Form.Group controlId="formBasicEmail" className="mb-3">
                        <div className="input-group">
                          <span className="input-group-text">
                            <i class="fa fa-envelope"></i>
                          </span>
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            className="custom-input"
                          />
                        </div>
                      </Form.Group>

                      <Form.Group
                        controlId="formBasicPassword"
                        className="mb-3"
                      >
                        <div className="input-group">
                          <span className="input-group-text">
                            <i class="fa fa-lock"></i>
                          </span>
                          <Form.Control
                            type="password"
                            placeholder="Mật khẩu"
                            className="custom-input"
                          />
                        </div>
                      </Form.Group>
                      <Button
                        variant="primary"
                        type="submit"
                        className="custom-login-btn"
                      >
                        <b>Đăng nhập</b>
                      </Button>

                      <div className="text-center mb-3">
                        <a href="#" className="forgot-password">
                          Quên mật khẩu?
                        </a>{" "}
                        hoặc{" "}
                        <a
                          href="#"
                          className="register"
                          onClick={handleRegisterShow}
                        >
                          Đăng ký
                        </a>
                      </div>
                    </Form>
                  </Modal.Body>
                </Modal>
                <a
                  href="#"
                  className="nav-link me-5 mb-1 fs-5 dk"
                  onClick={handleRegisterShow}
                >
                  <i class="fas fa-edit"></i>Đăng ký
                </a>
                <Modal
                  show={showRegister}
                  onHide={handleRegisterClose}
                  dialogClassName="custom-modal"
                >
                  <Modal.Header closeButton>
                    <Modal.Title className="custom-title">
                      Tạo tài khoản
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form className="custom-form">
                      <Form.Group
                        controlId="formBasicFirstName"
                        className="mb-3"
                      >
                        <div className="input-group">
                          <span className="input-group-text">
                            <i class="fa fa-user"></i>
                          </span>
                          <Form.Control
                            type="text"
                            placeholder="Họ"
                            className="custom-input"
                          />
                        </div>
                      </Form.Group>

                      <Form.Group
                        controlId="formBasicLastName"
                        className="mb-3"
                      >
                        <div className="input-group">
                          <span className="input-group-text">
                            <i class="fa fa-user"></i>
                          </span>
                          <Form.Control
                            type="password"
                            placeholder="Tên"
                            className="custom-input"
                          />
                        </div>
                      </Form.Group>

                      <Form.Group controlId="formBasicEmail" className="mb-3">
                        <div className="input-group">
                          <span className="input-group-text">
                            <i class="fa fa-envelope"></i>
                          </span>
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            className="custom-input"
                          />
                        </div>
                      </Form.Group>

                      <Form.Group
                        controlId="formBasicPassword"
                        className="mb-3"
                      >
                        <div className="input-group">
                          <span className="input-group-text">
                            <i class="fa fa-lock"></i>
                          </span>
                          <Form.Control
                            type="password"
                            placeholder="Mật khẩu"
                            className="custom-input"
                          />
                        </div>
                      </Form.Group>

                      <Button
                        variant="primary"
                        type="submit"
                        className="custom-login-btn"
                      >
                        <b>Đăng ký</b>
                      </Button>
                    </Form>
                  </Modal.Body>
                </Modal>
              </div>
              {/* gio hang cua Anh */}
              <div>
                <a href="#" onClick={toggleCart} className="giohang nav-link me-5 ms-2 ">
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
                              <td className="product-row"><img src={book.img} alt="" />{book.title}</td>
                              <td><p><span>{book.price}</span><sup>đ</sup></p></td>
                              <td className="number-input-row">
                                <input type="number" value={book.count} min={1} /></td>
                              <td className="delete-cell">
                                Xóa
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <div className="price-total">
                        <p>Tổng tiền: 
                          <span>
                            {
                              cartBooks.reduce((total, book) => {
                                return total + (parseFloat(book.price) * book.count);
                              }, 0).toFixed(3)
                            }
                          </span><sup>đ</sup></p>
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
};

export default Header;
