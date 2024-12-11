import React, { useState } from "react";

const PriceRangeMenu = ({ setPriceRange }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handlePriceChange = (min, max) => {
    setPriceRange({ min, max });
  };

  return (
    <div className="menu-container">
      {/* Nút ẩn/hiện menu */}
      <button onClick={toggleMenu} className="menu-toggle-btn">
        Khoảng giá: {isMenuVisible ? "➖" : "➕"}
      </button>

      {/* Menu ẩn/hiện */}
      {isMenuVisible && (
        <nav className="price-range-menu">
          <a href="#" onClick={() => handlePriceChange(0, Infinity)}>
            Tất cả
          </a>
          <a href="#" onClick={() => handlePriceChange(0, 100000)}>
            Nhỏ hơn 100,000₫
          </a>
          <a href="#" onClick={() => handlePriceChange(100000, 200000)}>
            Từ 100,000₫ - 200,000₫
          </a>
          <a href="#" onClick={() => handlePriceChange(200000, 300000)}>
            Từ 200,000₫ - 300,000₫
          </a>
          <a href="#" onClick={() => handlePriceChange(300000, 400000)}>
            Từ 300,000₫ - 400,000₫
          </a>
          <a href="#" onClick={() => handlePriceChange(400000, 500000)}>
            Từ 400,000₫ - 500,000₫
          </a>
          <a href="#" onClick={() => handlePriceChange(500000, Infinity)}>
            Lớn hơn 500,000₫
          </a>
        </nav>
      )}
    </div>
  );
};

export default PriceRangeMenu;
