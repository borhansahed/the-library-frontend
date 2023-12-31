import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function MainLayout() {
  return (
    <>
      <main
        style={{
          minHeight: "calc(100vh - 250px)",
        }}
        className="px-[200px] "
      >
        <Navbar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
