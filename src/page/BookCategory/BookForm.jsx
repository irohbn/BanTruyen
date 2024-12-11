import React from "react";

const BookForm = ({
  form,
  setForm,
  handleAddBook,
  handleUpdateBook,
  resetForm,
}) => {
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  return (
    <div className="form-group">
      <input
        type="text"
        name="title"
        placeholder="Tên sách"
        value={form.title}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Giá gốc"
        value={form.price}
        onChange={handleChange}
      />
      <input
        className="giagoc"
        type="number"
        name="oldPrice"
        placeholder="Giá giảm"
        value={form.oldPrice}
        onChange={handleChange}
      />
      <input
        className="giamgia text-danger"
        type="number"
        name="discount"
        placeholder="Giảm giá (%)"
        value={form.discount}
        onChange={handleChange}
      />
      <input type="file" name="image" onChange={handleChange} />
      <select name="category" value={form.category} onChange={handleChange}>
        <option value="">Chọn danh mục</option>
        <option value="WING BOOKS">WING BOOKS</option>
        <option value="Truyện tranh">Truyện tranh</option>
        <option value="Cổ tích nước ngoài">Cổ tích nước ngoài</option>
        <option value="Văn học">Văn học</option>
        <option value="Manga-comic">Manga-comic</option>
      </select>
      {form.id ? (
        <>
          <button onClick={handleUpdateBook}>Cập nhật sách</button>
          <button onClick={resetForm}>Hủy</button>
        </>
      ) : (
        <button onClick={handleAddBook}>Thêm sách</button>
      )}
    </div>
  );
};

export default BookForm;
