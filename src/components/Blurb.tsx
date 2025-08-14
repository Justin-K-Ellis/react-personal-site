import { Card, CardContent } from "@/components/ui/card";
import text from "../assets/text.json";

export default function Blurb() {
  return (
    <Card className="mb-6 md:mb-12 md:mt-6 md:p-10">
      <CardContent>
        <p className="text-justify text-xl">{text.blurb}</p>
      </CardContent>
    </Card>
  );
}
