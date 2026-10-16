"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { BreadcrumbItem, SectionProps } from "@/types/sun-aviora.types";

export type BreadcrumbProps = SectionProps.Breadcrumb & {
  title?: string;
  breadcrumbs?: BreadcrumbItem[];
  backgroundImage?: string;
};

export default function Breadcrumb({
  data,
  title: propTitle,
  breadcrumbs: propBreadcrumbs,
  backgroundImage: propBgImage,
}: BreadcrumbProps) {
  const title = propTitle || data?.title || "Page";
  const breadcrumbs = propBreadcrumbs || data?.breadcrumbs || [];
  const bgImg = propBgImage || data?.backgroundImage || "/images/Hero-banner.png";

  return (
    <section className="relative w-full min-h-[250px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[360px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center no-repeat transition-transform duration-1000 scale-100"
        style={{ backgroundImage: `url('${bgImg}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/35" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-12 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight drop-shadow-md">
            {title}
          </h1>

          <nav aria-label="Breadcrumb" className="mt-3 sm:mt-4 flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;

              return (
                <React.Fragment key={idx}>
                  {crumb.href && !isLast ? (
                    <Link
                      href={crumb.href}
                      className="text-white hover:text-[#ffb703] transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={isLast ? "text-white/80" : "text-white"}>
                      {crumb.label}
                    </span>
                  )}
                  {!isLast && <span className="text-white/60">/</span>}
                </React.Fragment>
              );
            })}
          </nav>
        </motion.div>
      </div>
    </section>
  );
}
