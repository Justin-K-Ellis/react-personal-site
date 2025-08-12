import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className=" shadow flex justify-between items-center bg-primary p-2 md:p-4">
      <Link to={"/"}>
        <h1 className="text-2xl font-bold text-accent">Justin Klitgaard</h1>
      </Link>
      <div className="flex gap-1 md:gap-4">
        <Link to={"/"} className="text-accent underline hover:text-secondary">
          Work
        </Link>
        <Link
          to={"/about"}
          className="text-accent underline hover:text-secondary"
        >
          About Me
        </Link>
        <Link
          to={"/resume"}
          className="text-accent underline hover:text-secondary"
        >
          Resume
        </Link>
      </div>
    </nav>
  );
}
