import { Link } from "@remix-run/react";

export function NotFound() {
  return (
    <div className=" gap-8 flex flex-col items-center justify-center absolute inset-0">
      <p className="text-4xl font-serif text-center">
        Hey, you&apos;re not supposed to be here
      </p>
      <Link className="text-blue-500" to="/">
        Return to main page
      </Link>
    </div>
  );
}
