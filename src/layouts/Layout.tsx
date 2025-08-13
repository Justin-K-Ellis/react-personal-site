import { Outlet } from "react-router";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <header>
        <Navbar />
      </header>
      <main className="flex w-9/10 md:w-7/10 mx-auto grow-1 p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
