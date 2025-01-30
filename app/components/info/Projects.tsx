import clsx from "clsx";
import { Project } from "~/types/data";
import { SectionLabel } from "../ui/SectionLabel";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className="py-12">
      <SectionLabel label="Projects" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col h-full overflow-clip">
            <div
              className={clsx(
                "grow basis-full",
                index === 0 && projects.length > 2 && "col-span-2"
              )}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="py-4">
              <p className="pb-1">{project.title}</p>
              <p className=" h-10 line-clamp-2 font-light text-sm">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
