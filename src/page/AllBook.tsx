import { Link } from "react-router-dom";
import Book from "../component/Book";
import SearchBar from "../component/book/SearchBar";
import { useGetBooksQuery } from "../redux/api/book.api";
import { IBook } from "../types/book.type";
import { useState } from "react";
import { bookGenre } from "../constraints/book";

export default function AllBook() {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const { data } = useGetBooksQuery(undefined);

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  let filteredBook = data?.data;

  if (search) {
    filteredBook = filteredBook.filter((book: IBook) => {
      return (
        book?.genre.includes(search) ||
        book.title.includes(search) ||
        book?.author.includes(search)
      );
    });
  } else if (filter) {
    if (filter === "genre" || filter === "year") {
      filteredBook = data?.data;
    } else {
      filteredBook = filteredBook.filter((book: IBook) => {
        return book?.genre.includes(filter) || book?.year.includes(filter);
      });
    }
  }

  return (
    <>
      <section className="my-24">
        <h1 className="text-3xl text-center font-bold  text-blue-700">
          All Books
        </h1>

        <div className="flex items-center  justify-between  mt-10  ">
          <div>
            <select
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
              }}
              className=" border border-blue-700 px-2 py-1 rounded-lg focus-within:outline-blue-700"
              name=""
              id=""
            >
              {filter ? (
                <>
                  <option value=""> {filter} </option>
                  {filter === "genre" && (
                    <>
                      {bookGenre.map((genre) => {
                        return <option value={genre}>{genre}</option>;
                      })}
                    </>
                  )}
                  {filter === "year" && (
                    <>
                      {Array.from(
                        new Set(filteredBook.map((book: IBook) => book.year))
                      ).map((year, index) => (
                        <option key={index} value={year as string}>
                          {year as string}
                        </option>
                      ))}
                    </>
                  )}
                </>
              ) : (
                <>
                  <option value="">Select</option>
                  <option value="year">Year</option>
                  <option value="genre">Genre</option>
                </>
              )}
            </select>
          </div>
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
