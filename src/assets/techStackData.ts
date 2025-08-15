import {
  SiExpress,
  SiJavascript,
  SiKnexdotjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
} from "react-icons/si";
import { BsDatabase } from "react-icons/bs";

import type { ITech } from "@/types";

const languages: ITech[] = [
  {
    name: "JavaScript",
    logo: SiJavascript,
  },
  {
    name: "TypeScript",
    logo: SiTypescript,
  },
  {
    name: "Python",
    logo: SiPython,
  },
  {
    name: "SQL",
    logo: BsDatabase,
  },
];

const frontend: ITech[] = [
  {
    name: "React.js",
    logo: SiReact,
  },
  {
    name: "Next.js",
    logo: SiNextdotjs,
  },
  {
    name: "Vue.js",
    logo: SiVuedotjs,
  },
  {
    name: "Tailwind CSS",
    logo: SiTailwindcss,
  },
  {
    name: "Vite",
    logo: SiVite,
  },
];

const backend: ITech[] = [
  {
    name: "node.js",
    logo: SiNodedotjs,
  },
  {
    name: "Express.js",
    logo: SiExpress,
  },
  {
    name: "PostgreSQL",
    logo: SiPostgresql,
  },
  {
    name: "Knex.js",
    logo: SiKnexdotjs,
  },
  {
    name: "Prisma",
    logo: SiPrisma,
  },
];

export { languages, frontend, backend };
