import type { JSX } from "react";

interface Props {
  children: JSX.Element;
}

export default function LinkStyling({ children }: Props) {
  return (
    <div className="text-accent underline hover:bg-secondary md:py-1 md:px-2 rounded hover:shadow-sm">
      {children}
    </div>
  );
}
