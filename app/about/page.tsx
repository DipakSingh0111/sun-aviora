import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import AboutSection from "@/components/about/AboutSection";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import StatsSection from "@/components/about/StatsSection";
import LatestProjects from "@/components/projects/LatestProjects";
import { getSunAvioraSections } from "@/lib/sun-aviora";

export const metadata: Metadata = {
  title: "About Us - SunAviora",
  description:
    "Learn about SunAviora, our mission, vision, and commitment to delivering reliable, sustainable solar energy solutions across India.",
};

export default function AboutPage() {
  const sections = getSunAvioraSections();

  return (
    <main className="w-full flex flex-col">
      <Breadcrumb
        title="About Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* About Us Main Section */}
      <AboutSection
        data={sections.AboutUs?.variants?.SunAvioraAboutUs1}
        showCta={false}
      />

      {/* Why Choose Us Section */}
      <WhyChooseUs
        data={sections.WhyChooseUs?.variants?.SunAvioraWhyChooseUs1}
      />

      {/* Stats Section with Working Animated Counters */}
      <StatsSection data={sections.Stats?.variants?.SunAvioraStats1} />

      {/* Projects Section */}
      <LatestProjects data={sections.Projects?.variants?.SunAvioraProjects1} />
    </main>
  );
}
