import "bootstrap/dist/css/bootstrap.min.css"; // Import CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import JS (bao gồm Popper)
import Header from "./page/Header";
import Footer from "./page/Footer";
import Body from "./page/Body";
import BookCategory from "./page/BookCategory/BookCategory";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./CSS/Header.css";
import "./CSS/Body.css";
import "./App.css";
import "./CSS/BookCategory.css";
import AddBookPage from "./page/BookCategory/AddBookPage";
import EditBookPage from "./page/BookCategory/EditBookPage";

function App() {
  const [cartBooks, setCartBooks] = useState([]);

  var handleAddToCart = (book) => {
    var newCartBooks = [...cartBooks]
    var cartBook = newCartBooks.find(m => m.id == book.id)
    if (cartBook != null) {
      cartBook.count = cartBook.count + 1;
    } else {
      cartBook = {
        id: book.id,
        title: book.title,
        img: book.img,
        price: book.price,
        count: 1
      }
      newCartBooks.push(cartBook)
    }
    setCartBooks(newCartBooks)
  };

  return (
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
  );
}

export default App;
