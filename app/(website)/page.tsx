import type { Metadata } from "next";
import { About, Explore, Hero } from "@/sections";

export const metadata: Metadata = {
  title: "Boost Turku",
  description:
    "Entrepreneurship society of Turku inspiring startups since 2009."
};

const Page = () => (
  <div className="overflow-hidden bg-primary-black">
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
  </div>
);

export default Page;
