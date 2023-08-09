import { Link } from "react-router-dom";
import Book from "../component/Book";
import SearchBar from "../component/book/SearchBar";
import { useGetBooksQuery } from "../redux/api/book.api";
import { IBook } from "../types/book.type";
import { useState } from "react";

export default function AllBook() {
  const [search, setSearch] = useState<string>("");
  const { data } = useGetBooksQuery(undefined);

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const filteredBook = search
    ? data?.data?.filter((book: IBook) => {
        return (
          book?.genre.includes(search) ||
          book.title.includes(search) ||
          book?.author.includes(search)
        );
      })
    : data?.data;
  console.log(filteredBook);
  return (
    <>
      <section className="my-24">
        <h1 className="text-3xl text-center font-bold  text-blue-700">
          All Books
        </h1>

        <div className="flex items-center  justify-between  mt-10  ">
          <div className=" ">filter</div>
          <div className="ml-24">
            <SearchBar
              onChange={(e: { target: { value: string } }) =>
                handleSearch(e.target.value)
              }
              value={search}
            />
          </div>

          <div className="">
            <Link
              className="w-20 bg-blue-700 text-white px-4 py-2.5 rounded-xl font-bold"
              to={"/addBook"}
            >
              Add New Book
            </Link>
          </div>
        </div>

        <div className="flex justify-center flex-wrap items-center gap-7 mt-14">
          {filteredBook?.map((book: IBook) => {
            return <Book key={book._id} book={book} />;
          })}
        </div>
      </section>
    </>
  );
}
