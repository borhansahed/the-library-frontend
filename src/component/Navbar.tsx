import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="flex  items-center justify-between">
        <Link to={"/"}>
          <div className="flex gap-1 items-center">
            <p className="text-blue-700 text-3xl">
              <FaBook />
            </p>
            <h1 className="text-3xl font-bold text-blue-700">The Library</h1>
          </div>
        </Link>
        <div>
          <ul className="flex justify-end gap-6">
            <Link to="/allBook">
              <li className="text-slate-700 font-bold">All Books</li>
            </Link>
            <Link to="/login">
              <li className="text-blue-700 font-bold">Login</li>
            </Link>
            <Link to="/signup">
              <li className="border hover:bg-white hover:border-blue-700 hover:text-blue-700 bg-blue-700 border-white text-sm font-bold text-white px-4 py-1 m-auto rounded-full">
                Signup
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
