import React, { Suspense } from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import BlogDetailClient from "@/components/BlogDetailClient";
import data from "@/data/sun-aviora.json";

export async function generateStaticParams() {
  const allPosts = [
    ...(data.blogPage?.posts || []),
    ...(data.blogSection?.posts || []),
  ];
  return allPosts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const allPosts = [
    ...(data.blogPage?.posts || []),
    ...(data.blogSection?.posts || []),
  ];
  const post = allPosts.find((p) => p.id === id) || allPosts[0];

  return {
    title: `${post ? post.title : "Blog Detail"} - SunAviora`,
    description: post ? post.description : "SunAviora solar insights and updates",
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="w-full flex flex-col font-sans">
      <Breadcrumb
        title="Blog Detail"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog Detail" },
        ]}
      />

      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <BlogDetailClient initialId={id} />
      </Suspense>
    </main>
  );
}
