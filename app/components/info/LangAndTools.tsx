import { Badge } from "../ui/Badge";

interface LangAndToolsType {
  name: string;
}

const languages: LangAndToolsType[] = [
  { name: "C" },
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "Python" },
  { name: "Html" },
  { name: "CSS" },
];

const tools: LangAndToolsType[] = [
  { name: "React" },
  { name: "Remix" },
  { name: "Next.js" },
  { name: "Git" },
  { name: "Gitlab" },
  { name: "GraphQL" },
  { name: "Figma" },
];

export function LangAndTools() {
  return (
    <div className="flex flex-col gap-8 py-4">
      <div className="flex flex-col gap-2">
        <p>Languages</p>
        <div className="flex gap-2 flex-wrap">
          {languages.map((language) => (
            <Badge key={language.name} label={language.name} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p>Tools and frameworks</p>
        <div className="flex gap-2 flex-wrap">
          {tools.map((tool) => (
            <Badge key={tool.name} label={tool.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
