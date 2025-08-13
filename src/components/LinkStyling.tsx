import type { JSX } from "react";

interface Props {
  children: JSX.Element;
}

export default function LinkStyling({ children }: Props) {
  return (
    <div className=" md:py-1 md:px-2 rounded underline hover:opacity-65">
      {children}
    </div>
  );
}
