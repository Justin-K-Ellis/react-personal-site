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
              <h2 className="text-3xl font-serif">About Me</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <p className="text-justify font-serif">{about.para1}</p>
            <p className="text-justify font-serif">{about.para2}</p>
            <p className="text-justify font-serif">{about.para3}</p>
            <p className="text-justify font-serif">{about.para4}</p>
            <h3 className="font-bold font-serif">In Sum:</h3>
            <p className="text-justify font-serif">{about.inSum}</p>
          </CardContent>
          <CardFooter>
            <ul>
              <li>
                <LinkStyling>
                  <a href={text.contact.linkedin} className="font-serif">
                    LinkedIn
                  </a>
                </LinkStyling>
              </li>
              <LinkStyling>
                <li>
                  <a href={text.contact.github} className="font-serif">
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
              <h3 className=" font-serif">References</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-4 flex flex-col gap-2">
              <li>
                <p className="font-bold font-serif">The Odin Project</p>
                <p className=" font-serif">{about.other.odin.description}</p>
                <LinkStyling>
                  <a href={about.other.odin.link} className=" font-serif">
                    Link
                  </a>
                </LinkStyling>
              </li>
              <li>
                <p className="font-bold font-serif">Code Chrysalis</p>
                <p className=" font-serif">{about.other.CC.description}</p>
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
