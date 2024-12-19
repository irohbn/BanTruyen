import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import JS (bao gồm Popper)
import ProductDetail from "./productdetail/ProductDetail";
import Search from "./search/Search";
import Header from "./page/Header";
import Footer from "./page/Footer";
import Body from "./page/Body";
import React from "react";
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
  var handleAddToCart = (book) => {
    var newCartBooks = [...cartBooks];
    var cartBook = newCartBooks.find((m) => m.id == book.id);
    if (cartBook != null) {
      cartBook.count = cartBook.count + 1;
    } else {
      cartBook = {
        id: book.id,
        title: book.title,
        img: book.img,
        price: book.price,
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
  );
}

export default App;
