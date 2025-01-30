import { languages, tools } from "~/data";
import { Badge } from "../ui/Badge";
import { SectionLabel } from "../ui/SectionLabel";
import { SkillItem } from "~/types/data";

const renderTools = (label: string, items: SkillItem[]) => {
  return (
    <div className="flex flex-col py-4">
      <SectionLabel label={label} />
      <div className="animate-infinite-scroll">
        <div className="flex w-fit gap-2 flex-wrap ">
          {items.map((item, idx) => (
            <Badge key={idx} label={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export function LangAndTools() {
  return (
    <div className="py-8">
      {renderTools("Languages", languages)}
      {renderTools("Tools and frameworks", tools)}
    </div>
  );
}
