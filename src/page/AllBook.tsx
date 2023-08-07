import { Link } from "react-router-dom";
import Book from "../component/Book";
import SearchBar from "../component/book/SearchBar";
import { useGetBooksQuery } from "../redux/api/book.api";
import { IBook } from "../types/book.type";

export default function AllBook() {
  const { data } = useGetBooksQuery(undefined);
  return (
    <>
      <section className="my-24">
        <h1 className="text-3xl text-center font-bold pr-10 text-blue-700">
          All Books
        </h1>

        <div className="flex items-center justify-between mt-10 px-8">
          <div>filter</div>
          <SearchBar />
          <div>
            <Link
              className="w-20 bg-blue-700 text-white px-4 py-2.5 rounded-xl font-bold"
              to={"/addBook"}
            >
              Add New Book
            </Link>
          </div>
        </div>

        <div className="flex justify-center flex-wrap items-center gap-7 mt-14">
          {data?.data.map((book: IBook) => {
            return <Book key={book._id} book={book} />;
          })}
        </div>
      </section>
    </>
  );
}
