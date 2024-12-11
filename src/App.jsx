import "bootstrap/dist/css/bootstrap.min.css"; // Import CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import JS (bao gồm Popper)
import Header from "./page/Header";
import Footer from "./page/Footer";
import Body from "./page/Body";
import BookCategory from "./page/BookCategory/BookCategory";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./CSS/Header.css";
import "./CSS/Body.css";
import "./App.css";
import "./CSS/BookCategory.css";
import AddBookPage from "./page/BookCategory/AddBookPage";
import EditBookPage from "./page/BookCategory/EditBookPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
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
