import React, { Suspense } from "react";
import type { Metadata } from "next";
import ProjectDetailClient from "@/components/projects/ProjectDetailClient";
import { getSunAvioraSections } from "@/lib/sun-aviora";

export async function generateStaticParams() {
  const sections = getSunAvioraSections();
  const projectsVariant = sections.Projects?.variants?.SunAvioraProjects1;
  const allProjects = [
    ...(projectsVariant?.page?.list || []),
    ...(projectsVariant?.list || []),
  ];
  const uniqueIds = Array.from(new Set(allProjects.map((p: any) => p.id)));
  return uniqueIds.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Project Detail - SunAviora`,
    description: `Explore project specifications, challenges, and solutions for project ${id}.`,
  };
}

export default async function ProjectDynamicDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await params;
  const sections = getSunAvioraSections();

  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <ProjectDetailClient data={sections.Projects?.variants?.SunAvioraProjects1?.details} />
    </Suspense>
  );
}
