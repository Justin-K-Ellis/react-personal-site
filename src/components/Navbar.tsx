import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="box">
      <Link to={"/"}>
        <h1>Justin Klitgaard</h1>
      </Link>
      <div className="nav-links">
        <Link to={"/"}>Work</Link>
        <Link to={"/about"}>About Me</Link>
        <Link to={"/resume"}>Resume</Link>
      </div>
    </nav>
  );
}
