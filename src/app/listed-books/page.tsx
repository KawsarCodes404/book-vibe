'use client'
import { BooksContext } from "@/context/BooksContext";
import { useContext } from "react";

const ListedBooks = () => {

    const {readBooks, wishlist} = useContext(BooksContext);

    return (
        <div>
            listed books
        </div>
    );
};

export default ListedBooks;