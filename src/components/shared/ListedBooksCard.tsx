import Image from "next/image";
import Link from "next/link";
import { IBook } from "@/types/books.type";

const ListedBooksCard = ({ book }: { book: IBook }) => (
    <article className="group flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-lg sm:flex-row sm:gap-6 sm:p-5">
        <div className="relative mx-auto h-52 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:mx-0 sm:h-44 sm:w-36">
            <Image src={book.image} alt={`Cover of ${book.bookName}`} fill sizes="(max-width: 640px) 100vw, 144px" className="object-contain p-3 transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">{book.category}</p>
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">{book.bookName}</h3>
                    <p className="mt-1 text-sm text-slate-500">by <span className="font-medium text-slate-700">{book.author}</span></p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700"><span aria-hidden="true">★</span> {book.rating}</span>
            </div>
            <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-600">{book.review}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                {book.tags.slice(0, 4).map((tag) => <span key={tag} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">#{tag}</span>)}
            </div>
            <div className="mt-5 flex flex-col gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                    <span><span className="font-medium text-slate-700">{book.yearOfPublishing}</span> · Published</span>
                    <span><span className="font-medium text-slate-700">{book.publisher}</span> · Publisher</span>
                    <span><span className="font-medium text-slate-700">{book.totalPages}</span> pages</span>
                </div>
                <Link href={`/books/${book.bookId}`} className="inline-flex shrink-0 items-center justify-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">
                    View details <span className="ml-2" aria-hidden="true">→</span>
                </Link>
            </div>
        </div>
    </article>
);

export default ListedBooksCard;
