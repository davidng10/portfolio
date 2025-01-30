import { Link, useLocation } from "@remix-run/react";
import { NAVIGATION_ITEMS } from "~/constants/Navigation";
import { Stroke } from "./ui/Stroke";
import clsx from "clsx";

export function Navbar() {
  const { pathname } = useLocation();

  return (
    <div className="flex items-center justify-end gap-8 text-xl py-14 font-light">
      {NAVIGATION_ITEMS.map((item) => {
        const isActive = item.href === pathname;
        return (
          <div
            className="flex items-center justify-center relative"
            key={item.href}
          >
            <Link
              className={clsx(
                !isActive && "hover:text-blue-500 transition-colors"
              )}
              to={item.href}
            >
              {item.label}
            </Link>
            {isActive && <Stroke className="absolute w-full top-3 h-min" />}
          </div>
        );
      })}
    </div>
  );
}
