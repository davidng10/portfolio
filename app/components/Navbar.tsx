import { Link, useLocation } from "@remix-run/react";
import { NAVIGATION_ITEMS } from "~/constants/Navigation";
import { Stroke } from "./ui/Stroke";

export function Navbar() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="flex items-center justify-end gap-8 text-xl py-14 font-light">
      {NAVIGATION_ITEMS.map((item) => (
        <div
          className="flex items-center justify-center relative"
          key={item.href}
        >
          <Link to={item.href}>{item.label}</Link>
          {item.href === pathname && (
            <Stroke className="absolute w-full top-3 h-min" />
          )}
        </div>
      ))}
    </div>
  );
}
