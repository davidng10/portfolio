import { Project, SkillItem } from "./types/data";

export const projects: Project[] = [
  {
    title: "Recyclables",
    description:
      "A Telegram bot connecting residents with rag-and-bone collectors, helping 780 users recycle 4.2 tons of waste effortlessly.",
    image: "./assets/recyclables.jpg",
    githubUrl: "https://github.com/wenbin-dev/project-1",
  },
  {
    title: "Impact Giving Map",
    description: "3D Impact data visualisation using Deck.gl",
    image: "./assets/impact-giving-map.jpg",
    githubUrl: "https://github.com/wenbin-dev/project-1",
  },
  {
    title: "React table + GraphQL server pagination",
    description:
      "Prototype to test headless react table with GraphQL based server pagination",
    image: "./assets/amazon-clone.jpg",
    githubUrl: "https://github.com/wenbin-dev/project-1",
  },
  {
    title: "Musical Sort",
    description: "Algorithmic music sorting display",
    image: "./assets/musical-sort.jpg",
    githubUrl: "https://github.com/wenbin-dev/project-1",
  },
  {
    title: "Local music player with React + Electron",
    description:
      "Utilizes a doubly linked list with a shuffle engine, supporting up to 100,000 songs",
    image: "./assets/react-candlelight.jpg",
    githubUrl: "https://github.com/wenbin-dev/project-1",
  },
];

export const languages: SkillItem[] = [
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "Python" },
  { name: "C" },
  { name: "Html" },
  { name: "CSS" },
];

export const tools: SkillItem[] = [
  { name: "React" },
  { name: "Remix" },
  { name: "Next.js" },
  { name: "Git" },
  { name: "Gitlab" },
  { name: "GraphQL" },
  { name: "Figma" },
];
