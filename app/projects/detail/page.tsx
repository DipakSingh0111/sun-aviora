import React from "react";
import type { Metadata } from "next";
import ProjectDetailClient from "@/components/projects/ProjectDetailClient";
import { getSunAvioraSections } from "@/lib/sun-aviora";

export const metadata: Metadata = {
  title: "Project Detail - SunAviora",
  description:
    "Explore detailed specifications, engineering challenges, solutions, and impact of SunAviora's 50 MW Solar Power Plant project in Jaipur, Rajasthan.",
};

export default function ProjectDetailPage() {
  const sections = getSunAvioraSections();
  return (
    <ProjectDetailClient
      data={sections.Projects?.variants?.SunAvioraProjects1?.details}
    />
  );
}
