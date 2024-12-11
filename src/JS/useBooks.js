//hien san pham o shop
import { useState, useEffect } from "react";

export const useBooks = () => {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  const [form, setForm] = useState({
    id: null,
    title: "",
    price: "",
    oldPrice: "",
    discount: "",
    image: null, // Image as file
    category: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleAddBook = () => {
    return new Promise((resolve, reject) => {
      if (form.title && form.price) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const newBook = {
            ...form,
            id: Date.now(),
            image: reader.result,
          };
          setBooks((prevBooks) => {
            const updatedBooks = [...prevBooks, newBook];
            resolve(updatedBooks);
            return updatedBooks;
          });
        };
        if (form.image) {
          reader.readAsDataURL(form.image);
        } else {
          const newBook = {
            ...form,
            id: Date.now(),
            image: null,
          };
          setBooks((prevBooks) => {
            const updatedBooks = [...prevBooks, newBook];
            resolve(updatedBooks);
            return updatedBooks;
          });
        }
      } else {
        reject("Form is incomplete");
      }
    });
  };

  const handleEditBook = (book) => {
    setForm({ ...book, image: null });
    setIsEditing(true);
  };

  const handleUpdateBook = () => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === form.id
            ? {
                ...form,
                image: form.image ? reader.result : book.image,
              }
            : book
        )
      );
      resetForm();
      setIsEditing(false);
    };
    if (form.image) {
      reader.readAsDataURL(form.image);
    } else {
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === form.id
            ? {
                ...form,
                image: book.image,
              }
            : book
        )
      );
      resetForm();
      setIsEditing(false);
    }
  };

  const handleDeleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const resetForm = () => {
    setForm({
      id: null,
      title: "",
      price: "",
      oldPrice: "",
      discount: "",
      image: null,
      category: "",
    });
  };

  return {
    books,
    form,
    isEditing,
    setForm,
    setIsEditing,
    handleAddBook,
    handleEditBook,
    handleUpdateBook,
    handleDeleteBook,
    resetForm,
  };
};
