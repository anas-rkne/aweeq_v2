import { HeroBottomBar } from "@/components/home/HeroBottomBar";
import { HeroCreature } from "@/components/home/HeroCreature";
import { HeroHeadline } from "@/components/home/HeroHeadline";
import { HeroReveal } from "@/components/home/HeroReveal";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { EgyptSection } from "@/components/home/EgyptSection";

/**
 * Home — thin composition only.
 * Layout lives in `components/layout`, sections in `components/home`,
 * copy in `config/site.ts`.
 */
export default function Home() {
  return (
    <>
      <HeroReveal className="flex min-h-svh w-full flex-col bg-[#000000] text-white selection:bg-white selection:text-black">
        <SiteHeader />

        <main className="relative z-20 flex flex-1 items-center justify-center pt-20">
          <HeroHeadline />
        </main>

        <HeroBottomBar />

        <HeroCreature />
      </HeroReveal>
      <EgyptSection />
    </>
  );
}
