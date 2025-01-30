import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import type { MetaFunction, LinksFunction } from "@vercel/remix";

import "./tailwind.css";

import { Navbar } from "./components/Navbar";
import { NotFound } from "./components/NotFound";

export const links: LinksFunction = () => [
  {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/x-icon",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Wen Bin" },
    {
      name: "description",
      content:
        "Frontend Software Engineer living in Singapore. Hugely passionate in building apps to simplify people's lives.",
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <NotFound />;
    }

    throw new Error(`${error.status} ${error.statusText}`);
  }

  throw new Error(error instanceof Error ? error.message : "Unknown Error");
}
