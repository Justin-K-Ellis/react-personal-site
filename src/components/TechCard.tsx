import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function TechCard({ text }: { text: string }) {
  return (
    <Card className="grow-1 hover:shadow-2xl">
      <CardHeader>
        <CardTitle className="text-center">{text}</CardTitle>
      </CardHeader>
    </Card>
  );
}
