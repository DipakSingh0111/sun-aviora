import React from "react";
import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import FaqSection from "@/components/FaqSection";
import data from "@/data/sun-aviora.json";

export const metadata: Metadata = {
  title: "FAQ - SunAviora",
  description:
    "Find answers to frequently asked questions about solar panel installation, cost savings, energy storage, and maintenance with SunAviora.",
};

export default function FaqPage() {
  const { faqPage } = data;

  return (
    <main className="w-full flex flex-col">
      {/* Reusable Page Banner */}
      <PageBanner
        title={faqPage.banner.title}
        breadcrumbs={faqPage.banner.breadcrumbs}
      />

      {/* Main FAQ Section */}
      <FaqSection />
    </main>
  );
}
