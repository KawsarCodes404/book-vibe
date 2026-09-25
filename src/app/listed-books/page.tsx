'use client'
import ListedBooksCard from "@/components/shared/ListedBooksCard";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext, useState } from "react";

const ListedBooks = () => {
    const { readBooks, wishlist } = useContext(BooksContext);

    const [sortBy, setsortBy] = useState<"rating" | "pages" | "year">("rating");

    const sortBooks = (books : IBook[]) => {
        const sortedBooks = [...books];

        if (sortBy === "rating") {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        }
        else if (sortBy === "pages") {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        }
        else sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);

        return sortedBooks;
    }

    const sortedReadBooks = sortBooks(readBooks);

    const sortedWishList = sortBooks(wishlist);

    return (
        <main className="container mx-auto max-w-6xl px-4 py-8 sm:py-12">
            <header className="mb-8 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-amber-50 px-6 py-10 text-center ring-1 ring-slate-200 sm:py-14">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Your personal library</p>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Listed Books</h1>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">Keep your reading list close and pick up right where your next story begins.</p>
            </header>

            <div className="text-center">
                <select
                    value={sortBy}
                    onChange={(e) => setsortBy(e.target.value as "rating" | "pages" | "year")}
                    defaultValue="Pick a Runtime"
                    className="select select-success"
                >
                    <option disabled={true}>Sort by</option>
                    <option value={"rating"}>Ratting</option>
                    <option value={"pages"}>Number of pages</option>
                    <option value={"year"}>Publisher year</option>
                </select>
            </div>

            <div className="tabs tabs-lift w-full">
                <input type="radio" name="listed_books_tabs" className="tab" aria-label={`Read Books (${sortedReadBooks.length})`} defaultChecked />
                
                <div className="tab-content w-full rounded-b-2xl border border-slate-200 bg-white p-4 sm:p-6">
                    {sortedReadBooks.length > 0 ? (
                        <div className="mt-4 grid grid-cols-1 gap-5">
                            {sortedReadBooks.map((book: IBook) => <ListedBooksCard book={book} key={book.bookId} />)}
                        </div>
                    ) : <EmptyState title="No books marked as read yet" description="When you mark a book as read, it will appear here." />}
                </div>


                <input type="radio" name="listed_books_tabs" className="tab" aria-label={`Wishlist Books (${sortedWishList.length})`} />

                <div className="tab-content w-full rounded-b-2xl border border-slate-200 bg-white p-4 sm:p-6">
                    {sortedWishList.length > 0 ? (
                        <div className="mt-4 grid grid-cols-1 gap-5">
                            {sortedWishList.map((book: IBook) => <ListedBooksCard book={book} key={book.bookId} />)}
                        </div>
                    ) : <EmptyState title="Your wishlist is ready for a story" description="Save books you want to read and they will show up here." />}
                </div>
            </div>
        </main>
    );
};

const EmptyState = ({ title, description }: { title: string; description: string }) => (
    <div className="my-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-xl text-emerald-700" aria-hidden="true">▤</span>
        <h2 className="mt-4 text-lg font-semibold text-slate-900">{title}</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">{description}</p>
    </div>
);

export default ListedBooks;
