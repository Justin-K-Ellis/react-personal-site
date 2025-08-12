import text from "../assets/text.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="box">
      <p>Copyright {currentYear}</p>
      <p>
        <span>
          <a href={text.contact.github}>GitHub</a>|
          <a href={text.contact.linkedin}>LinkedIn</a>
        </span>
      </p>
    </div>
  );
}
