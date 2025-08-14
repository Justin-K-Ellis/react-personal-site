import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import type { IconType } from "react-icons/lib";

interface TechCardProps {
  name: string;
  Logo: IconType;
}

export default function TechCard({ name, Logo }: TechCardProps) {
  return (
    <Card className="grow-1 hover:shadow-2xl">
      <CardHeader>
        <CardTitle className="text-center flex justify-center items-center gap-2">
          <Logo className="text-2xl" />
          <p className="text-xl">{name}</p>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
