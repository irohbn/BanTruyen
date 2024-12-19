import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import JS (bao gồm Popper)
import ProductDetail from "./productdetail/ProductDetail";
import Search from "./search/Search";
import Header from "./page/Header";
import Footer from "./page/Footer";
import Body from "./page/Body";
<<<<<<< HEAD
import BookCategory from "./page/BookCategory/BookCategory";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
=======
import React from "react";
>>>>>>> 7db4d0db5a6bcb3c3d8d3962f2969fba1218f4fb
import "./CSS/Header.css";
import "./CSS/Body.css";
import "./App.css";
import "./CSS/Shop.css";
import "./CSS/LoginPage.css";
import "./CSS/RegisterPage.css";
import Bookshop from "./page/Book/Bookshop";
import Admin from "./page/Admin";
import { AuthProvider } from "./JS/auth/auth";
import ProtectedRoute from "./JS/auth/ProtectedRoute";
import { useState } from "react";
function App() {
  const [cartBooks, setCartBooks] = useState([]);
<<<<<<< HEAD
  var handleAddToCart = (book) => {
    var newCartBooks = [...cartBooks];
    var cartBook = newCartBooks.find((m) => m.id == book.id);
=======

  var handleAddToCart = (book) => {
    var newCartBooks = [...cartBooks]
    var cartBook = newCartBooks.find(m => m.id == book.id)
>>>>>>> b61e13314d349c2527d27c99b207118d8d95c1b8
    if (cartBook != null) {
      cartBook.count = cartBook.count + 1;
    } else {
      cartBook = {
        id: book.id,
        title: book.title,
        img: book.img,
        price: book.price,
<<<<<<< HEAD
        count: 1,
      };
      newCartBooks.push(cartBook);
    }
    setCartBooks(newCartBooks);
  };

  return (
    <AuthProvider>
      {" "}
      {/* Wrap entire app */}
      <div className="App">
        <Header cartBooks={cartBooks} />
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route path="/" element={<Body onCartChange={handleAddToCart} />} />
          <Route path="/shop" element={<Bookshop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/search" element={<Search />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute role="admin">
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
=======
        count: 1
      }
      newCartBooks.push(cartBook)
    }
    setCartBooks(newCartBooks)
  };

  return (
<<<<<<< HEAD
    <Router>
      <div className="App">
        <Header cartBooks={cartBooks} />
        <Routes>
          <Route path="/" element={<Body onCartChange={handleAddToCart} />} />
          <Route path="/shop" element={<BookCategory />} />
          <Route path="/add" element={<AddBookPage />} />
          <Route path="/edit/:id" element={<EditBookPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
=======
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
>>>>>>> 7db4d0db5a6bcb3c3d8d3962f2969fba1218f4fb
>>>>>>> b61e13314d349c2527d27c99b207118d8d95c1b8
  );
}

export default App;
