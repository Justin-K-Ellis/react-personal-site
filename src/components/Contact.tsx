import { Card, CardContent } from "@/components/ui/card";
import { SiLinkedin, SiGithub } from "react-icons/si";

import text from "../assets/text.json";
import Title from "./Title";
import LinkStyling from "./LinkStyling";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mb-8 md:mb-16 w-full flex flex-col justify-center items-center"
    >
      <Title text="Contact Me" />
      <Card className="w-full md:w-2/3">
        <CardContent className="p-2">
          <ul className="flex flex-col justify-center items-center gap-2">
            <li>
              <LinkStyling>
                <a
                  href={text.contact.github}
                  className="text-xl underline flex gap-1 items-center"
                >
                  GitHub
                  <SiGithub />
                </a>
              </LinkStyling>
            </li>
            <li>
              <LinkStyling>
                <a
                  href={text.contact.linkedin}
                  className="text-xl underline flex gap-1 items-center"
                >
                  LinkedIn
                  <SiLinkedin />
                </a>
              </LinkStyling>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
