import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface StackAccordionProps {
  stack: string[];
}

export default function StackAccordion({ stack }: StackAccordionProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="stack-items">
        <AccordionTrigger>Tech stack:</AccordionTrigger>
        <AccordionContent>
          <ul className="flex gap-1 flex-wrap">
            {stack.map((tech) => (
              <Badge
                className="text-black bg-linear-to-bl from-amber-200 to-yellow-100 shadow-sm"
                key={tech}
              >
                {tech}
              </Badge>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
