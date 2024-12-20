import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  newBooks,
  bestSellers,
  Combo,
  Manga,
  WingBook,
  VHNN,
} from "../../JS/testbook";

function BookList({ books }) {
  return (
    <div className="book-grid">
      {books.map((book, index) => (
        <div className="bok" key={index}>
          <Link to={`/product/${book.title}`} className="sale">
            <img src={`./public/img/${book.img}`} alt={book.title} />
            <p>{book.title}</p>
            <button>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <span className="prince">{book.price}</span>{" "}
            <s>{book.originalPrice}</s>
          </Link>
        </div>
      ))}
    </div>
  );
}

function Bookshop() {
  const allBooks = [
    ...newBooks,
    ...bestSellers,
    ...Combo,
    ...Manga,
    ...WingBook,
    ...VHNN,
  ];

  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [categoryTitle, setCategoryTitle] = useState("Tất cả");
  const [selectedPriceRange, setSelectedPriceRange] = useState("ALL");
  const [sortOption, setSortOption] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isPriceMenuOpen, setIsPriceMenuOpen] = useState(false);
  const booksPerPage = 24;

  const filteredBooksByCategory =
    selectedCategory === "Tất cả"
      ? allBooks
      : allBooks.filter((book) => book.Loai === selectedCategory);

  const filteredBooksByPrice = filteredBooksByCategory.filter((book) => {
    const price = parseFloat(book.price.replace(".", ""));
    switch (selectedPriceRange) {
      case "lessThan100":
        return price < 100000;
      case "100To200":
        return price >= 100000 && price < 200000;
      case "200To300":
        return price >= 200000 && price < 300000;
      case "300To400":
        return price >= 300000 && price < 400000;
      case "400To500":
        return price >= 400000 && price < 500000;
      case "greaterThan500":
        return price >= 500000;
      default:
        return true;
    }
  });

  const sortedBooks = filteredBooksByPrice.sort((a, b) => {
    const priceA = parseFloat(a.price.replace(".", ""));
    const priceB = parseFloat(b.price.replace(".", ""));
    switch (sortOption) {
      case "newest":
        return new Date(b.date) - new Date(a.date);
      case "oldest":
        return new Date(a.date) - new Date(b.date);
      case "priceAsc":
        return priceA - priceB;
      case "priceDesc":
        return priceB - priceA;
      case "az":
        return a.title.localeCompare(b.title);
      case "za":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(sortedBooks.length / booksPerPage);
  const startIndex = (currentPage - 1) * booksPerPage;
  const paginatedBooks = sortedBooks.slice(
    startIndex,
    startIndex + booksPerPage
  );

  const categories = [
    "Tất cả",
    "Truyện Tranh",
    "Manga",
    "ComBo",
    "WingBooks",
    "Văn học nước ngoài",
  ];

  const priceRanges = [
    { label: "Tất cả", value: "ALL" },
    { label: "Nhỏ hơn 100,000", value: "lessThan100" },
    { label: "Từ 100.000 - 200.000", value: "100To200" },
    { label: "Từ 200.000 - 300.000", value: "200To300" },
    { label: "Từ 300.000 - 400.000", value: "300To400" },
    { label: "Từ 400.000 - 500.000", value: "400To500" },
    { label: "Lớn hơn 500.000", value: "greaterThan500" },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCategoryTitle(category);
    setCurrentPage(1);
  };

  return (
    <div className="bookshop">
      <div className="menu ">
        <p className="ms-2 bg-danger d-inline-flex">
          Danh mục
          <button
            className="toggle-button ms-5 "
            onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
          >
            {isCategoryMenuOpen ? "-" : "+"}
          </button>
        </p>
        {isCategoryMenuOpen && (
          <div>
            {categories.map((category) => (
              <a
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={selectedCategory === category ? "active" : ""}
              >
                {category}
              </a>
            ))}
          </div>
        )}
        <hr></hr>
        <p className="ms-2 mt-5 d-inline-flex bg-danger ">
          Khoảng giá
          <button
            className="toggle-button ms-5 "
            onClick={() => setIsPriceMenuOpen(!isPriceMenuOpen)}
          >
            {isPriceMenuOpen ? "-" : "+"}
          </button>
        </p>
        {isPriceMenuOpen && (
          <div>
            {priceRanges.map((range) => (
              <a
                key={range.value}
                onClick={() => {
                  setSelectedPriceRange(range.value);
                  setCurrentPage(1);
                }}
                className={selectedPriceRange === range.value ? "active" : ""}
              >
                {range.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <h2 className="category-title">{categoryTitle}</h2>

      <div className="content">
        <BookList books={paginatedBooks} />
        <div className="pagination">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <p className="d-inline">Sắp xếp</p>
      <div className="sort-menu me-3">
        <select
          value={sortOption}
          onChange={(e) => {
            setSortOption(e.target.value);
            setCurrentPage(1);
          }}
        >
          {[
            { label: "Mới nhất", value: "newest" },
            { label: "Cũ nhất", value: "oldest" },
            { label: "Giá tăng dần", value: "priceAsc" },
            { label: "Giá giảm dần", value: "priceDesc" },
            { label: "A-Z", value: "az" },
            { label: "Z-A", value: "za" },
          ].map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Bookshop;
