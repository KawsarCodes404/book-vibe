'use client'
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({book} : {book:IBook}) => {

    const {readBooks, setreadBooks} = useContext(BooksContext);

    const handleReadBook = () => {
        setreadBooks([...readBooks, book]);
        toast.success(`you have read ${book.bookName}`)
    }

    return (
        <button 
            className="btn border-0 bg-emerald-600 px-6 text-white shadow-md hover:bg-emerald-700"
            onClick={() => handleReadBook()}
        >
            Read
        </button>
    );
};

export default ReadButton;