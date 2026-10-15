import React, { Suspense } from "react";
import type { Metadata } from "next";
import ProjectDetailClient from "@/components/ProjectDetailClient";
import data from "@/data/sun-aviora.json";

export async function generateStaticParams() {
  const allProjects = [
    ...(data.projectsPage?.projects || []),
    ...(data.latestProjects?.projects || []),
  ];
  const uniqueIds = Array.from(new Set(allProjects.map((p) => p.id)));
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
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <ProjectDetailClient />
    </Suspense>
  );
}
