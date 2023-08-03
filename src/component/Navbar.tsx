import { FaBook } from "react-icons/fa";
export default function Navbar() {
  return (
    <>
      <div className="flex  items-center justify-between">
        <div className="flex gap-1 items-center">
          <p className="text-blue-700 text-3xl">
            <FaBook />
          </p>
          <h1 className="text-3xl font-bold text-blue-700">The Library</h1>
        </div>
        <div>
          <ul className="flex justify-end gap-6">
            <li>All Books</li>
            <li className="text-blue-700 font-bold">Login</li>
            <li className="text-blue-700 font-bold">Signup</li>
          </ul>
        </div>
      </div>
    </>
  );
}
