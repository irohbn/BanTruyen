import React from "react";
import { useNavigate } from "react-router-dom";
import BookForm from "./BookForm";
import { useBooks } from "../../JS/useBooks";

const AddBookPage = () => {
  const { form, setForm, handleAddBook, resetForm } = useBooks();
  const navigate = useNavigate();

  const handleAddAndNavigate = async () => {
    try {
      await handleAddBook();
      resetForm();
      navigate("/shop");
    } catch (error) {
      console.error("Failed to add book:", error);
    }
  };

  return (
    <div>
      <h2>Thêm Truyện Mới</h2>
      <BookForm
        form={form}
        setForm={setForm}
        handleAddBook={handleAddAndNavigate}
        resetForm={() => {
          resetForm();
          navigate("/shop");
        }}
      />
    </div>
  );
};

export default AddBookPage;
