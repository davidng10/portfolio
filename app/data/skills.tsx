import { SkillItem } from "../types/data";
import JavaScript from "react-devicons/javascript/original";
import TypeScript from "react-devicons/typescript/original";
import Python from "react-devicons/python/original";
import C from "react-devicons/c/original";
import Html from "react-devicons/html5/original";
import Css from "react-devicons/css3/original";
import React from "react-devicons/react/original";
import Next from "react-devicons/nextjs/original";
import Git from "react-devicons/git/original";
import Gitlab from "react-devicons/gitlab/original";
import GraphQL from "react-devicons/graphql/plain";
import Figma from "react-devicons/figma/original";
import AWS from "react-devicons/amazonwebservices/original-wordmark";

export const languages: SkillItem[] = [
  { name: "TypeScript", icon: <TypeScript /> },
  { name: "JavaScript", icon: <JavaScript /> },
  { name: "Python", icon: <Python /> },
  { name: "C", icon: <C /> },
  { name: "Html", icon: <Html /> },
  { name: "CSS", icon: <Css /> },
];

export const tools: SkillItem[] = [
  { name: "React", icon: <React /> },
  { name: "Remix" },
  { name: "Next.js", icon: <Next /> },
  { name: "Git", icon: <Git /> },
  { name: "Gitlab", icon: <Gitlab /> },
  { name: "GraphQL", icon: <GraphQL /> },
  { name: "Figma", icon: <Figma /> },
  { name: "AWS", icon: <AWS /> },
];
