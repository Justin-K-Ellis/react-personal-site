import { Card, CardContent } from "@/components/ui/card";

import text from "../assets/text.json";
import Title from "./Title";
import LinkStyling from "./LinkStyling";

export default function Contact() {
  return (
    <section id="contact" className="mb-8 md:mb-16">
      <Title text="Contact Me" />
      <Card>
        <CardContent className="p-2">
          <ul className="flex flex-col justify-center items-center gap-2">
            <li>
              <LinkStyling>
                <a href={text.contact.github} className="text-xl underline">
                  GitHub
                </a>
              </LinkStyling>
            </li>
            <li>
              <LinkStyling>
                <a href={text.contact.linkedin} className="text-xl underline">
                  LinkedIn
                </a>
              </LinkStyling>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
