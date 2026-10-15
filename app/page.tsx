import HeroBanner from "@/components/home/HeroBanner";
import AboutSection from "@/components/about/AboutSection";
import ServicesSection from "@/components/services/ServicesSection";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import StatsSection from "@/components/about/StatsSection";
import LatestProjects from "@/components/projects/LatestProjects";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogSection from "@/components/blog/BlogSection";
import { getSunAvioraSections } from "@/lib/sun-aviora";

export default function Home() {
  const sections = getSunAvioraSections();

  return (
    <main className="w-full flex flex-col">
      <HeroBanner data={sections.HeroBanner?.variants?.SunAvioraHeroBanner1} />
      <AboutSection data={sections.AboutUs?.variants?.SunAvioraAboutUs1} />
      <ServicesSection data={sections.Services?.variants?.SunAvioraServices1} />
      <WhyChooseUs
        data={sections.WhyChooseUs?.variants?.SunAvioraWhyChooseUs1}
      />
      <StatsSection data={sections.Stats?.variants?.SunAvioraStats1} />
      <LatestProjects data={sections.Projects?.variants?.SunAvioraProjects1} />
      <TestimonialsSection
        data={sections.Testimonials?.variants?.SunAvioraTestimonials1}
      />
      <BlogSection data={sections.BlogNews?.variants?.SunAvioraBlogNews1} />
    </main>
  );
}
