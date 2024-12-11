import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookForm from "./BookForm";
import { useBooks } from "../../JS/useBooks";

const EditBookPage = () => {
  const { id } = useParams();
  const { books, form, setForm, handleUpdateBook, resetForm } = useBooks();
  const navigate = useNavigate();

  React.useEffect(() => {
    const bookToEdit = books.find((book) => book.id === parseInt(id));
    if (bookToEdit) {
      setForm({ ...bookToEdit, image: null });
    }
  }, [id, books, setForm]);

  const handleUpdateAndNavigate = () => {
    handleUpdateBook();
    navigate("/shop");
  };

  const handleCancelAndNavigate = () => {
    resetForm();
    navigate("/shop");
  };

  return (
    <div>
      <h2>Sửa Truyện</h2>
      <BookForm
        form={form}
        setForm={setForm}
        handleUpdateBook={handleUpdateAndNavigate}
        resetForm={handleCancelAndNavigate}
      />
    </div>
  );
};

export default EditBookPage;
