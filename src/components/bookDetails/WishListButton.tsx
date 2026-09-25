'use client'
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({book} : {book:IBook}) => {

    const {wishlist, setwishlist} = useContext(BooksContext);

    const handleAddWishList = () => {
        setwishlist([...wishlist, book]);
        toast.success(`you have added ${book.bookName} to your wishlist`)
    }

    return (
        <button 
            className="btn border-0 bg-emerald-600 px-6 text-white shadow-md hover:bg-emerald-700"
            onClick={() => handleAddWishList()}
        >
            Add to Wish List
        </button>
    );
};

export default WishListButton;