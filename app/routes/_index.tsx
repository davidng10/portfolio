import { Hero } from "~/components/info/Hero";
import { LangAndTools } from "~/components/info/LangAndTools";
import { Projects } from "~/components/info/Projects";
import { projects } from "~/data";

export default function Index() {
  return (
    <div className="flex flex-col">
      <Hero />
      <LangAndTools />
      <Projects projects={projects} />
    </div>
  );
}
