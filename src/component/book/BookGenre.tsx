import { bookGenre } from "../../constraints/book";

interface IProps {
  handleInputData: (key: string, value: string) => void;
  genre: string | File;
}
const BookGenre = ({ handleInputData, genre }: IProps) => {
  return (
    <>
      <label
        className=" ml-32 mt-3 font-bold  text-[14px] text-slate-600"
        htmlFor="genre"
      >
        Genre
      </label>
      <select
        value={genre as string}
        onChange={(e) => handleInputData("genre", e.target.value)}
        className="border py-1   text-sm placeholder:text-sm focus:outline-blue-700 mt-1 border-slate-400 w-52 mx-auto px-3 rounded-md"
        id="genre"
      >
        {bookGenre.map((genre) => {
          return <option key={Math.random() / 21}>{genre}</option>;
        })}
      </select>
    </>
  );
};

export default BookGenre;
