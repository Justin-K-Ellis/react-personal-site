import { Link } from "react-router";

import LinkStyling from "./LinkStyling";

export default function Navbar() {
  return (
    <nav className=" shadow flex justify-between items-center bg-primary p-2 md:p-4">
      <Link to={"/"}>
        <h1 className="text-2xl font-bold text-accent">Justin Klitgaard</h1>
      </Link>
      <div className="flex gap-1 md:gap-4">
        <LinkStyling>
          <Link to={"/"}>Work</Link>
        </LinkStyling>
        <LinkStyling>
          <Link to={"/about"}>About Me</Link>
        </LinkStyling>
        <LinkStyling>
          <Link to={"/resume"}>Resume</Link>
        </LinkStyling>
      </div>
    </nav>
  );
}
