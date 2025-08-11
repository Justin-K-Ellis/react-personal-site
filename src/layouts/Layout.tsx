import { Outlet } from "react-router";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div className="page-wrap">
      <Navbar />
      <main className="box">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
