import React, { Suspense } from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import ServiceDetailClient from "@/components/services/ServiceDetailClient";
import { getSunAvioraSections } from "@/lib/sun-aviora";

export async function generateStaticParams() {
  const sections = getSunAvioraSections();
  const servicesVariant = sections.Services?.variants?.SunAvioraServices1;
  const allServices = [
    ...(servicesVariant?.page?.list || []),
    ...(servicesVariant?.list || []),
    ...(servicesVariant?.serviceDetails?.sidebarList || []),
  ];
  const uniqueIds = Array.from(new Set(allServices.map((s: any) => s.id)));
  return uniqueIds.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return {
    title: "Service Detail - SunAviora",
    description: `Learn more about SunAviora's specialized ${id} solar solutions and expert engineering.`,
  };
}

export default async function ServiceDynamicDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const sections = getSunAvioraSections();
  const pageBanner = sections.PageBanners?.variants?.SunAvioraPageBanners1?.pages?.services;

  return (
    <main className="w-full flex flex-col font-sans">
      <Breadcrumb
        data={pageBanner}
        title="Service Detail"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services", href: "/services" },
          { label: "Service Detail" },
        ]}
      />

      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <ServiceDetailClient
          initialServiceId={id}
          data={sections.Services?.variants?.SunAvioraServices1?.serviceDetails}
        />
      </Suspense>
    </main>
  );
}
