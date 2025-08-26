import { Outlet } from "react-router";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header>
        <Navbar />
        <div className="w-full bg-white pb-4 pt-16 md:pb-8 md:pt-24">
          <Hero />
        </div>
      </header>
      <main className="flex w-full md:w-7/10 mx-auto grow-1 p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
