import React from "react";
import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import ServiceDetailClient from "@/components/ServiceDetailClient";

export const metadata: Metadata = {
  title: "Service Detail - SunAviora",
  description:
    "Learn more about SunAviora's specialized solar and renewable solutions, hybrid systems, and expert engineering.",
};

export default function ServiceDetailPage() {
  return (
    <main className="w-full flex flex-col font-sans">
      <PageBanner
        title="Service Detail"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Detail" },
        ]}
      />

      <ServiceDetailClient initialServiceId="hybrid-wind-solar" />
    </main>
  );
}
