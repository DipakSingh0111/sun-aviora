import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import BlogListing from "@/components/BlogListing";
import data from "@/data/sun-aviora.json";

export const metadata: Metadata = {
  title: "Blog - SunAviora",
  description:
    "Discover the latest news, tips and industry trends about solar energy, renewable solutions and a greener future with SunAviora.",
};

export default function BlogPage() {
  const blogPage = data.blogPage || {
    banner: {
      title: "Blog",
      breadcrumbs: [{ label: "Home", href: "/" }, { label: "Blog" }],
    },
  };

  return (
    <main className="w-full flex flex-col">
      <Breadcrumb
        title={blogPage.banner.title}
        breadcrumbs={blogPage.banner.breadcrumbs}
      />
      <BlogListing />
    </main>
  );
}
