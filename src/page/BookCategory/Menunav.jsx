import React, { useState } from "react";

const Menunav = ({ setSelectedCategory }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="menu-container">
      {/* Nút ẩn/hiện menu */}
      <button onClick={toggleMenu} className="menu-toggle-btn">
        Danh mục sản phẩm: {isMenuVisible ? "➖" : "➕"}
      </button>

      {/* Menu sách */}
      {isMenuVisible && (
        <nav className="category-nav">
          <a href="#" onClick={() => setSelectedCategory("")}>
            Tất cả
          </a>
          <a href="#" onClick={() => setSelectedCategory("WING BOOKS")}>
            WING BOOKS
          </a>
          <a href="#" onClick={() => setSelectedCategory("Truyện tranh")}>
            Truyện tranh
          </a>
          <a href="#" onClick={() => setSelectedCategory("Cổ tích nước ngoài")}>
            Cổ tích nước ngoài
          </a>
          <a href="#" onClick={() => setSelectedCategory("Văn học")}>
            Văn học
          </a>
          <a href="#" onClick={() => setSelectedCategory("Manga-comic")}>
            Manga-comic
          </a>
        </nav>
      )}
    </div>
  );
};

export default Menunav;
