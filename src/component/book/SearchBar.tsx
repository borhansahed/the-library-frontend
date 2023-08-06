import { GoSearch } from "react-icons/go";

export default function SearchBar() {
  return (
    <>
      <div className="flex border  focus-within:border-blue-600 border-slate-400 p-1 px-2 w-96 rounded-lg items-center">
        <p className="text-blue-700">
          <GoSearch />
        </p>
        <input
          width={200}
          className="focus:outline-none pl-2"
          type="text"
          placeholder="search your book"
        />
      </div>
    </>
  );
}
