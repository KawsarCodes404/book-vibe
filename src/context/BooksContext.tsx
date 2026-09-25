'use client'
import { IBook } from "@/types/books.type";
import React, { createContext, ReactNode, useState } from "react";

interface IBooksContext {
    readBooks: IBook[];
    setreadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
    wishlist: IBook[];
    setwishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<IBooksContext>({
    readBooks: [],
    setreadBooks: () => {},
    wishlist: [],
    setwishlist: () => {}
});

const BooksProvider = ({ children }: { children: ReactNode }) => {

    const [readBooks, setreadBooks] = useState<IBook[]>([]);

    const [wishlist, setwishlist] = useState<IBook[]>([]);

    const sharedData = {
        readBooks,
        setreadBooks,
        wishlist,
        setwishlist
    }

    return (
        <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
    );
};

export default BooksProvider;