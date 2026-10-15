import React, { Suspense } from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import BlogDetailClient from "@/components/blog/BlogDetailClient";
import { getSunAvioraSections } from "@/lib/sun-aviora";

export async function generateStaticParams() {
  const sections = getSunAvioraSections();
  const blogNewsData = sections.BlogNews?.variants?.SunAvioraBlogNews1;
  const allPosts = [
    ...(blogNewsData?.page?.list || []),
    ...(blogNewsData?.list || []),
  ];
  return allPosts.map((post: any) => ({
    id: post.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const sections = getSunAvioraSections();
  const blogNewsData = sections.BlogNews?.variants?.SunAvioraBlogNews1;
  const allPosts = [
    ...(blogNewsData?.page?.list || []),
    ...(blogNewsData?.list || []),
  ];
  const post = allPosts.find((p: any) => p.id === id) || allPosts[0];

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
  const sections = getSunAvioraSections();
  const pageBanner = sections.PageBanners?.variants?.SunAvioraPageBanners1?.pages?.blog;

  return (
    <main className="w-full flex flex-col font-sans">
      <Breadcrumb
        data={pageBanner}
        title="Blog Detail"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Blog Detail" },
        ]}
      />

      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <BlogDetailClient
          initialId={id}
          data={sections.BlogNews?.variants?.SunAvioraBlogNews1}
        />
      </Suspense>
    </main>
  );
}
