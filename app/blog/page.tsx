import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import BlogListing from "@/components/blog/BlogListing";
import { getSunAvioraSections } from "@/lib/sun-aviora";

export const metadata: Metadata = {
  title: "Blog - SunAviora",
  description:
    "Discover the latest news, tips and industry trends about solar energy, renewable solutions and a greener future with SunAviora.",
};

export default function BlogPage() {
  const sections = getSunAvioraSections();
  const pageBanner = sections.PageBanners?.variants?.SunAvioraPageBanners1?.pages?.blog;

  return (
    <main className="w-full flex flex-col">
      <Breadcrumb
        data={pageBanner}
        title={pageBanner?.title || "Blog"}
        breadcrumbs={pageBanner?.breadcrumbs || [{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <BlogListing data={sections.BlogNews?.variants?.SunAvioraBlogNews1} />
    </main>
  );
}
