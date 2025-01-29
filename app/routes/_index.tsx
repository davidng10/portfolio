import type { MetaFunction } from "@remix-run/node";
import { Hero } from "~/components/info/Hero";
import { LangAndTools } from "~/components/info/LangAndTools";

export const meta: MetaFunction = () => {
  return [{ title: "Wen Bin" }];
};

export default function Index() {
  return (
    <div className="">
      <Hero />
      <LangAndTools />
    </div>
  );
}
