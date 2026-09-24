import BookCard from "@/components/shared/BookCard";
import { IBook } from "@/types/books.type";


const getBooks = async() => {
    const res = await fetch('http://localhost:3000/booksData.json');
    const data = await res.json();
    return data;
}

const Books = async() => {

    const booksData = await getBooks();

    return (
        <section className="container mx-auto my-[70px] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                booksData.map((book: IBook) => <BookCard
                    key={book.bookId}
                    book={book}
                />)
            }
        </section>
    );
};

export default Books;