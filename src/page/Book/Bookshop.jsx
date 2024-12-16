import React, { useState, useEffect } from "react";

function Bookshop() {
  const [books, setBooks] = useState([]); // State để lưu danh sách truyện

  // Gọi API lấy danh sách truyện từ Fastify
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3000/books");
        console.log("Response:", response); // Log response
        const data = await response.json();
        console.log("Data:", data); // Log data
        setBooks(data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks(); // Gọi hàm lấy dữ liệu
  }, []); // Chạy một lần khi component render

  // Hiển thị danh sách truyện
  return (
    <div>
      <h2>Book Management</h2>
      <div className="book-container">
        {books.length > 0 ? (
          books.map((book) => (
            <div className="book-card" key={book._id}>
              {/* Hiển thị ảnh truyện */}
              <img
                className="book-avatar"
                src={book.avatar}
                alt={`${book.title} image`}
              />
              {/* Hiển thị thông tin truyện */}
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">Tác giả: {book.TacGia}</p>
                <p className="book-price">Giá: {book.price}đ</p>
                <p className="book-original-price">
                  Giá gốc: {book.originalPrice}đ
                </p>
                <p className="book-category">Thể loại: {book.Theloai}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Không có truyện nào để hiển thị.</p> // Thông báo nếu không có dữ liệu
        )}
      </div>
    </div>
  );
}

export default Bookshop;
