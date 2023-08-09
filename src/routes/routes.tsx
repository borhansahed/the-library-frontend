import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Login from "../page/Login";
import Signup from "../page/Signup";
import Home from "../page/Home";
import AllBook from "../page/AllBook";
import AddBook from "../page/AddBook";
import BookDetails from "../component/book/BookDetails";
import EditBook from "../component/book/EditBook";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        index: true,
        element: <Home />,
      },
      {
        path: "/allBook",
        element: <AllBook />,
      },
      {
        path: "/allBook/:id",
        element: <BookDetails />,
      },
      {
        path: "/allBook/:id/editBook",
        element: <EditBook />,
      },
      {
        path: "/addBook",
        element: <AddBook />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

export default routes;
