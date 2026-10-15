import React, { Suspense } from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import ServiceDetailClient from "@/components/ServiceDetailClient";
import data from "@/data/sun-aviora.json";

export async function generateStaticParams() {
  const allServices = [
    ...(data.servicesPage?.services || []),
    ...(data.services || []),
    ...(data.serviceDetailData?.sidebarList || []),
  ];
  const uniqueIds = Array.from(new Set(allServices.map((s) => s.id)));
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

  return (
    <main className="w-full flex flex-col font-sans">
      <Breadcrumb
        title="Service Detail"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services", href: "/services" },
          { label: "Service Detail" },
        ]}
      />

      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <ServiceDetailClient initialServiceId={id} />
      </Suspense>
    </main>
  );
}
