"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import siteData from "@/data/sun-aviora.json";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
}

export default function Breadcrumb({
  title,
  breadcrumbs,
  backgroundImage,
}: BreadcrumbProps) {
  const bgImg = backgroundImage || siteData.heroBanner.backgroundImage;

  return (
    <section className="relative w-full min-h-[260px] sm:min-h-[300px] md:min-h-[340px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url('${bgImg}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/30" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight drop-shadow-md">
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
