import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import ServiceDetailClient from "@/components/services/ServiceDetailClient";
import { getSunAvioraSections } from "@/lib/sun-aviora";

export const metadata: Metadata = {
  title: "Service Detail - SunAviora",
  description:
    "Learn more about SunAviora's specialized solar and renewable solutions, hybrid systems, and expert engineering.",
};

export default function ServiceDetailPage() {
  const sections = getSunAvioraSections();
  const pageBanner = sections.PageBanners?.variants?.SunAvioraPageBanners1?.pages?.services;

  return (
    <main className="w-full flex flex-col font-sans">
      <Breadcrumb
        data={pageBanner}
        title="Service Detail"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Detail" },
        ]}
      />

      <ServiceDetailClient
        initialServiceId="hybrid-wind-solar"
        data={sections.Services?.variants?.SunAvioraServices1?.serviceDetails}
      />
    </main>
  );
}
