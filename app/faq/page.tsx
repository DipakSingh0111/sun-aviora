import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import FaqSection from "@/components/faq/FaqSection";
import { getSunAvioraSections } from "@/lib/sun-aviora";

export const metadata: Metadata = {
  title: "FAQ - SunAviora",
  description:
    "Find answers to frequently asked questions about solar panel installation, cost savings, energy storage, and maintenance with SunAviora.",
};

export default function FaqPage() {
  const sections = getSunAvioraSections();
  const pageBanner = sections.PageBanners?.variants?.SunAvioraPageBanners1?.pages?.faq;

  return (
    <main className="w-full flex flex-col">
      <Breadcrumb
        data={pageBanner}
        title={pageBanner?.title || "Faq"}
        breadcrumbs={pageBanner?.breadcrumbs || [
          { label: "Home", href: "/" },
          { label: "Faq" },
        ]}
      />

      {/* Main FAQ Section */}
      <FaqSection data={sections.Faq?.variants?.SunAvioraFaq1} />
    </main>
  );
}
