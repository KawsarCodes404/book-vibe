import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";

interface IBookCardProps {
    book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Book Cover */}
            <div className="relative h-72 overflow-hidden bg-slate-100">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={600}
                    height={800}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Category */}
                <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur-sm">
                        {book.category}
                    </span>
                </div>

                {/* Rating */}
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                    <span className="text-yellow-400">★</span>
                    {book.rating}
                </div>
            </div>

            {/* Content */}
            <div className="space-y-4 p-5">
                {/* Title & Author */}
                <div>
                    <h2 className="line-clamp-1 text-xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600">
                        {book.bookName}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        by{" "}
                        <span className="font-medium text-slate-700">
                            {book.author}
                        </span>
                    </p>
                </div>

                {/* Description */}
                <p className="line-clamp-3 text-sm leading-6 text-slate-600">
                    {book.review}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Book Information */}
                <div className="grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 text-sm">
                    <div>
                        <p className="text-xs text-slate-400">Pages</p>
                        <p className="font-semibold text-slate-700">
                            {book.totalPages}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-400">Published</p>
                        <p className="font-semibold text-slate-700">
                            {book.yearOfPublishing}
                        </p>
                    </div>
                </div>

                {/* Button */}
                <Link href={`/books/${book.bookId}`}>
                    <button className="btn w-full border-0 bg-emerald-600 text-white hover:bg-emerald-700">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BookCard;