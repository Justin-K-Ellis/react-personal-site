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
                className="text-secondary-foreground bg-linear-to-bl from-secondary to-secondary/90 shadow-sm"
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
