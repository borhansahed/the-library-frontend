import "./App.css";
import { Toaster } from "react-hot-toast";

import MainLayout from "./layout/Main.Layout";

function App() {
  return (
    <>
      <MainLayout />
      <Toaster />
    </>
  );
}

export default App;
