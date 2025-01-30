import { useEffect, useState } from "react";
import { NAVIGATION_ITEMS } from "../constants/Navigation";
import { Stroke } from "./ui/Stroke";
import clsx from "clsx";

export function Navbar() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleUrlChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleUrlChange);
    return () => window.removeEventListener("popstate", handleUrlChange);
  }, []);

  return (
    <div className="flex items-center justify-end gap-8 text-xl py-14 font-light">
      {NAVIGATION_ITEMS.map((item) => {
        const isActive = item.href === currentPath;
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
