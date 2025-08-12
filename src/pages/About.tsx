import text from "../assets/text.json";
const about = text.aboutMe;

export default function About() {
  return (
    <>
      {/* Main stuff */}
      <section id="about-me">
        <h1>About Me</h1>
        <p>{about.para1}</p>
        <p>{about.para2}</p>
        <p>{about.para3}</p>
        <p>{about.para4}</p>
        <h2>In Sum:</h2>
        <p>{about.inSum}</p>
        <ul>
          <li>
            <a href={text.contact.linkedin}>LinkedIn</a>
          </li>
          <li>
            <a href={text.contact.github}>GitHub</a>
          </li>
        </ul>
      </section>

      {/* Reference links */}
      <section id="links">
        <h3>References</h3>
        <div>
          <p>The Odin Project</p>
          <p>{about.other.odin.description}</p>
          <a href={about.other.odin.link}>Link</a>
        </div>
        <div>
          <p>Code Chrysalis</p>
          <p>{about.other.CC.description}</p>
          <a href={about.other.CC.link}>Link</a>
        </div>
      </section>
    </>
  );
}
