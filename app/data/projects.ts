import { Project } from "../types/data";

export const projects: Project[] = [
  {
    title: "Recyclables",
    description:
      "A Telegram bot connecting residents with rag-and-bone collectors, helping 780 users recycle 4.2 tons of waste effortlessly.",
    image: "./assets/recyclables.jpg",
    url: "https://recyclables.netlify.app/",
  },
  {
    title: "Impact Giving Map",
    description: "3D Impact data visualisation using Deck.gl",
    image: "./assets/impact-giving-map.jpg",
  },
  {
    title: "Table with GraphQL server pagination",
    description:
      "Prototype to test headless react table with GraphQL based server pagination",
    image: "./assets/amazon-clone.jpg",
    url: "https://github.com/davidng10/amazon-storefront-clone",
  },
  {
    title: "Musical Sort",
    description: "Algorithmic music sorting display",
    image: "./assets/musical-sort.jpg",
    url: "https://github.com/davidng10/Musical-sort",
  },
  {
    title: "Local music player with Electron",
    description:
      "Utilizes a doubly linked list with a shuffle engine, supporting up to 100,000 songs",
    image: "./assets/react-candlelight.jpg",
    url: "https://github.com/davidng10/react-candlelight",
  },
];
