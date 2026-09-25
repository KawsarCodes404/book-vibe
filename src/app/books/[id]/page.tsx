import ReadButton from "@/components/bookDetails/ReadButton";
import WishListButton from "@/components/bookDetails/WishListButton";
import { IBook } from "@/types/books.type";
import Image from "next/image";

interface IBookDetailsProps {
  params: Promise<{
    id: string;
  }>
}

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

const BookDetailsPage = async ({ params }: IBookDetailsProps) => {

  const { id } = await params;

  const booksData = await getBooks();

  const book = booksData.find((book: IBook) => book.bookId === Number(id)) as IBook;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="card overflow-hidden border border-slate-200 bg-base-100 shadow-xl lg:card-side">
        <figure className="bg-slate-100 p-6 lg:w-2/5">
          <Image
            src={book.image}
            width={300}
            height={400}
            alt={`Cover of ${book.bookName}`}
            className="h-auto max-h-[480px] w-full max-w-[320px] rounded-xl object-cover shadow-lg"
            priority
          />
        </figure>

        <div className="card-body gap-6 p-6 sm:p-10 lg:w-3/5">
          <div>
            <span className="badge badge-success badge-outline mb-4">
              {book.category}
            </span>

            <h1 className="card-title text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              {book.bookName}
            </h1>

            <p className="mt-2 text-lg text-slate-500">
              by <span className="font-semibold text-slate-700">{book.author}</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xl text-amber-400">★</span>
            <span className="font-bold text-slate-800">{book.rating}</span>
            <span className="text-sm text-slate-500">book rating</span>
          </div>

          <p className="leading-7 text-slate-600">{book.review}</p>

          <div className="flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="badge rounded-full border-0 bg-emerald-50 px-3 py-3 font-medium text-emerald-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 rounded-xl bg-slate-50 p-4 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">Pages</p>
              <p className="mt-1 font-semibold text-slate-800">{book.totalPages}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Published
              </p>
              <p className="mt-1 font-semibold text-slate-800">
                {book.yearOfPublishing}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Publisher
              </p>
              <p className="mt-1 font-semibold text-slate-800">{book.publisher}</p>
            </div>
          </div>

          {/* right button */}
          <div className="card-actions justify-end">
            <ReadButton book={book} />

            <WishListButton book={book} />
          </div>
        </div>
      </div>
    </div>
  );

};

export default BookDetailsPage;