import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Login from "../page/Login";
import Signup from "../page/Signup";
import Home from "../page/Home";
import AllBook from "../page/AllBook";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/allBook",
        element: <AllBook />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

export default routes;
