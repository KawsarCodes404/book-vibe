import BookCard from "@/components/shared/BookCard";
import { IBook } from "@/types/books.type";


const getBooks = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
        const data = await res.json();
        return data;
    } catch(error) {
        console.log("Error Fetching Book Data:", error);
        return [];
    }
};

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