import "bootstrap/dist/css/bootstrap.min.css"; // Import CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import JS (bao gồm Popper)
import Header from "./page/Header";
import Footer from "./page/Footer";
import Body from "./page/Body";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./CSS/Header.css";
import "./CSS/Body.css";
import "./App.css";
import "./CSS/Shop.css";
import Bookshop from "./page/Book/Bookshop";
import "./../AUD/src2/cs/csss.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/shop" element={<Bookshop />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
