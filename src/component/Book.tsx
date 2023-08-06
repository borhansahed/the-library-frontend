import { IBook } from "../types/book.type";

interface IProps {
  book: IBook;
}

export default function Book({ book }: IProps) {
  return (
    <>
      <article
        className="w-[350px]  h-[350px] border border-blue-700 rounded-lg hover:scale-105"
        key={book._id}
      >
        <div>
          <img
            className="object-cover w-full h-[180px]  rounded-lg "
            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&cover=crop&w=600&q=40"
            alt="book_pic"
            height={50}
          />
          <div className="px-10 mt-2 text-sm font-bold text-slate-500">
            <h1 className="text-2xl text-blue-700">{book.title}</h1>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <p>{book.publicationDate}</p>
            <button className="border hover:bg-white hover:border-blue-700 hover:text-blue-700 bg-blue-700 text-sm font-bold text-white px-4 py-2 w-full mt-3 rounded-full">
              View Book
            </button>
          </div>
        </div>
      </article>
    </>
  );
}
