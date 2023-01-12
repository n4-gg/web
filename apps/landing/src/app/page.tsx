import { CTA } from "@/components/Landing/CTA";
import { FAQ } from "@/components/Landing/FAQ";
import { Features } from "@/components/Landing/Features";
import { Hero } from "@/components/Landing/Hero";
import { Stats } from "@/components/Landing/Stats";

export default function Page() {
  return (
    <main>
      <Hero />
      <Stats />
      <Features />
      <CTA />
      <FAQ />
    </main>
  );
}
