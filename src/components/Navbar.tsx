import { NAVIGATION_ITEMS } from "../constants/Navigation";
import { Stroke } from "./ui/Stroke";
import clsx from "clsx";

interface NavbarProps {
  currentPath: string;
}

export function Navbar({ currentPath }: NavbarProps) {
  return (
    <div className="flex items-center justify-end gap-8 text-xl py-14 font-light">
      {NAVIGATION_ITEMS.map((item) => {
        const isActive = currentPath === item.href;
        return (
          <div
            className="flex items-center justify-center relative"
            key={item.href}
          >
            <a
              className={clsx(
                !isActive && "hover:text-blue-500 transition-colors"
              )}
              href={item.href}
            >
              {item.label}
            </a>
            {isActive && <Stroke className="absolute w-full h-min" />}
          </div>
        );
      })}
    </div>
  );
}
