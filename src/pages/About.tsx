import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import LinkStyling from "@/components/LinkStyling";
import text from "../assets/text.json";
const about = text.aboutMe;

export default function About() {
  return (
    <div className="flex flex-col gap-4">
      {/* Main stuff */}
      <section id="about-me">
        <Card>
          <CardHeader>
            <CardTitle>
              <h2 className="text-3xl">About Me</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 text-justify">
            {about.paragraphs.map((para) => (
              <p>{para}</p>
            ))}
          </CardContent>

          {/* Socials */}
          <CardFooter>
            <ul>
              <li>
                <LinkStyling>
                  <a
                    href={text.contact.linkedin}
                    className="text-primary-foreground"
                  >
                    LinkedIn
                  </a>
                </LinkStyling>
              </li>
              <LinkStyling>
                <li>
                  <a
                    href={text.contact.github}
                    className="text-primary-foreground"
                  >
                    GitHub
                  </a>
                </li>
              </LinkStyling>
            </ul>
          </CardFooter>
        </Card>
      </section>

      {/* Reference links */}
      <section id="links">
        <Card>
          <CardHeader>
            <CardTitle>
              <h3 className="text-xl">References</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-4 flex flex-col gap-2">
              <li>
                <p className="font-bold">The Odin Project</p>
                <p className=" font">{about.other.odin.description}</p>
                <LinkStyling>
                  <a href={about.other.odin.link} className=" font">
                    Link
                  </a>
                </LinkStyling>
              </li>
              <li>
                <p className="font-bold">Code Chrysalis</p>
                <p className=" font">{about.other.CC.description}</p>
                <LinkStyling>
                  <a href={about.other.CC.link}>Link</a>
                </LinkStyling>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div></div>
        <div></div>
      </section>
    </div>
  );
}
