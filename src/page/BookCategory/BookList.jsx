const BookList = ({
  books,
  selectedCategory,
  priceRange,
  sortType,
  handleEditBook,
  handleDeleteBook,
}) => {
  const filteredBooks = books
    .filter((book) => {
      const isCategoryMatch =
        !selectedCategory || book.category === selectedCategory;
      const isPriceMatch =
        book.price >= priceRange.min && book.price <= priceRange.max;
      return isCategoryMatch && isPriceMatch;
    })
    .sort((a, b) => {
      if (sortType === "a-z") return a.title.localeCompare(b.title);
      if (sortType === "z-a") return b.title.localeCompare(a.title);
      if (sortType === "price-asc") return a.price - b.price;
      if (sortType === "price-desc") return b.price - a.price;
      if (sortType === "newest") return b.id - a.id; // Sắp xếp theo mới nhất
      if (sortType === "oldest") return a.id - b.id; // Sắp xếp theo cũ nhất
      return 0;
    });

  return (
    <div className="books">
      {filteredBooks.map((book) => (
        <div className="book-item" key={book.id}>
          <a href="#" className="book-link">
            <img src={book.image} alt={book.title} className="book-image" />
          </a>
          <h4>{book.title}</h4>
          <p className="price">
            {book.price.toLocaleString()}₫
            <span className="old-price ms-2">
              {book.oldPrice.toLocaleString()}₫
            </span>
          </p>
          <span className="discount">-{book.discount}%</span>
          <div className="actions">
            <button onClick={() => handleEditBook(book)}>Sửa</button>
            <button onClick={() => handleDeleteBook(book.id)}>Xóa</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
