import { useGetBooksQuery } from "../redux/api/book.api";
import { IBook } from "../types/book.type";

import Book from "./Book";

export default function LatestBook() {
  const { data } = useGetBooksQuery(undefined);

  return (
    <>
      <section id="#books" className="mb-20">
        <h1 className="text-center text-slate-700 text-4xl font-bold">
          <span>Latest</span> Book
        </h1>
        <div className="flex justify-center flex-wrap items-center gap-7 mt-10">
          {data?.data.map((book: IBook) => {
            return <Book key={book._id} book={book} />;
          })}
        </div>
      </section>
    </>
  );
}
