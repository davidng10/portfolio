import JavaScript from "../assets/javascript-logo.svg";
import TypeScript from "../assets/typescript-logo.svg";
import Python from "../assets/python-logo.svg";
import Clang from "../assets/c-logo.svg";
import Html from "../assets/html-logo.svg";
import Css from "../assets/css-logo.svg";
import React from "../assets/react-logo.svg";
import Next from "../assets/next-logo.svg";
import Git from "../assets/git-logo.svg";
import Gitlab from "../assets/gitlab-logo.svg";
import GraphQL from "../assets/graphql-logo.svg";
import Figma from "../assets/figma-logo.svg";
import Amazon from "../assets/aws-logo.svg";
import Tailwind from "../assets/tailwind-logo.svg";
import type { SkillItem } from "../types/data";

export const languages: SkillItem[] = [
  { name: "TypeScript", icon: TypeScript },
  { name: "JavaScript", icon: JavaScript },
  { name: "Python", icon: Python },
  { name: "C", icon: Clang },
  { name: "Html", icon: Html },
  { name: "CSS", icon: Css },
];

export const tools: SkillItem[] = [
  { name: "React", icon: React },
  { name: "Remix" },
  { name: "Next.js", icon: Next },
  { name: "Git", icon: Git },
  { name: "Gitlab", icon: Gitlab },
  { name: "GraphQL", icon: GraphQL },
  { name: "Figma", icon: Figma },
  { name: "AWS", icon: Amazon },
  { name: "Tailwind", icon: Tailwind },
];
