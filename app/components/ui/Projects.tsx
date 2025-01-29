import clsx from "clsx";
import { Project } from "~/types/data";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className="py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div key={project.title} className="flex flex-col h-full gap-2">
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
          <div>
            <p>{project.title}</p>
            <p className="text-stone-400 h-12 line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
