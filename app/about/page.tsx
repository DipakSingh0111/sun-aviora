import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsSection from "@/components/StatsSection";
import LatestProjects from "@/components/LatestProjects";

export const metadata: Metadata = {
  title: "About Us - SunAviora",
  description:
    "Learn about SunAviora, our mission, vision, and commitment to delivering reliable, sustainable solar energy solutions across India.",
};

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col">
      <Breadcrumb
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* About Us Main Section */}
      <AboutSection showCta={false} />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Stats Section with Working Animated Counters */}
      <StatsSection />

      {/* Projects Section */}
      <LatestProjects />
    </main>
  );
}
