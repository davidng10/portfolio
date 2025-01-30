import { Hero } from "./Hero";
import { LangAndTools } from "./LangAndTools";
import { Projects } from "./Projects";
import { projects } from "~/data/projects";

export function InfoPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <LangAndTools />
      <Projects projects={projects} />
    </div>
  );
}
