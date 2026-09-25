'use client'
import { createContext, ReactNode, useState } from "react";

export const BooksContext = createContext({});

const BooksProvider = ({children} : {children : ReactNode}) => {

    const [readBooks, setreadBooks] = useState([]);

    const [wishlist, setwishlist] = useState([]);

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