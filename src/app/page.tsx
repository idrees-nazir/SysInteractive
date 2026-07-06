import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FeaturedPortfolio } from "@/components/home/FeaturedPortfolio";
import { TechStack } from "@/components/home/TechStack";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedPortfolio />
      <TechStack />
      <Testimonials />
    </>
  );
}
