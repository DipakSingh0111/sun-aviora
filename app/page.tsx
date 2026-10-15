import HeroBanner from "@/components/HeroBanner";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsSection from "@/components/StatsSection";
import LatestProjects from "@/components/LatestProjects";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <HeroBanner />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <StatsSection />
      <LatestProjects />
      <TestimonialsSection />
      <BlogSection />
    </main>
  );
}
