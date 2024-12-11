import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBooks } from "../../JS/useBooks";
import BookList from "./BookList";
import Menunav from "./Menunav";
import SortOptions from "./SortOptions";
import PriceRangeMenu from "./PriceRangeMenu"; // Import the new PriceRangeMenu component

const BookCategory = () => {
  const { books, handleDeleteBook } = useBooks();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortType, setSortType] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity }); // Add price range state
  const navigate = useNavigate();

  return (
    <div className="book-category">
      <div className="menu-nav-container">
        <Menunav setSelectedCategory={setSelectedCategory} />
        <PriceRangeMenu setPriceRange={setPriceRange} />{" "}
        {/* Add Price Range Menu */}
        <a className="nutquanly" href="/add">
          Thêm Truyện
        </a>
      </div>
      <main className="book-list">
        <BookList
          books={books}
          selectedCategory={selectedCategory}
          priceRange={priceRange} // Pass price range to BookList
          sortType={sortType}
          handleEditBook={(book) => navigate(`/edit/${book.id}`)}
          handleDeleteBook={handleDeleteBook}
        />
      </main>
      <SortOptions sortType={sortType} setSortType={setSortType} />
    </div>
  );
};

export default BookCategory;
