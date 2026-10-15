import React from "react";
import type { Metadata } from "next";
import ProjectDetailClient from "@/components/ProjectDetailClient";

export const metadata: Metadata = {
  title: "Project Detail - SunAviora",
  description:
    "Explore detailed specifications, engineering challenges, solutions, and impact of SunAviora's 50 MW Solar Power Plant project in Jaipur, Rajasthan.",
};

export default function ProjectDetailPage() {
  return <ProjectDetailClient />;
}
