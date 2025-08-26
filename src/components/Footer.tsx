import text from "../assets/text.json";
import LinkStyling from "./LinkStyling";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const name = text.hero.title;

  return (
    <footer className="flex flex-col justify-center items-center p-8 bg-secondary">
      <p>
        Copyright {currentYear} {name}
      </p>
      <p>
        <span className="flex gap-2">
          <LinkStyling>
            <a href={text.contact.github}>GitHub</a>
          </LinkStyling>
          <>|</>
          <LinkStyling>
            <a href={text.contact.linkedin}>LinkedIn</a>
          </LinkStyling>
        </span>
      </p>
    </footer>
  );
}
