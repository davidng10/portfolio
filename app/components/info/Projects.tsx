import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Project } from "~/types/data";
import { SectionLabel } from "../ui/SectionLabel";
import { ArrowUpRight, CaretLeft, CaretRight } from "@phosphor-icons/react";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  const scrollNext = useCallback(
    (dir: "next" | "prev") => {
      if (emblaApi) {
        if (dir === "next") emblaApi.scrollNext();
        else emblaApi.scrollPrev();
      }
    },
    [emblaApi]
  );

  return (
    <div className="py-12">
      <div className="flex justify-between items-center mb-8">
        <SectionLabel label="Projects" />
        <div>
          <button
            onClick={() => scrollNext("prev")}
            className="p-2 rounded-full hover:bg-stone-100 transition-colors"
          >
            <CaretLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scrollNext("next")}
            className="p-2 rounded-full hover:bg-stone-100 transition-colors"
          >
            <CaretRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flex-[0_0_100%] max-w-sm min-w-0">
              <div className="flex flex-col h-full overflow-clip">
                <div className="grow basis-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="py-4">
                  <p className="pb-1 flex items-center gap-1">
                    {project.title}
                    {project.url && (
                      <span className="text-stone-400">
                        <a href={project.url} target="_blank" rel="noreferrer">
                          <ArrowUpRight className="w-4 h-4 hover:text-blue-500 transition-colors" />
                        </a>
                      </span>
                    )}
                  </p>
                  <p className="h-10 line-clamp-2 font-light text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
