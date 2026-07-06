import { AnimateIn } from "@/components/ui/AnimateIn";
import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FeaturedPortfolio } from "@/components/home/FeaturedPortfolio";
import { TechStack } from "@/components/home/TechStack";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <AnimateIn>
        <Hero />
      </AnimateIn>
      <AnimateIn>
        <ServicesOverview />
      </AnimateIn>
      <AnimateIn>
        <FeaturedPortfolio />
      </AnimateIn>
      <AnimateIn>
        <TechStack />
      </AnimateIn>
      <AnimateIn>
        <Testimonials />
      </AnimateIn>
    </>
  );
}
