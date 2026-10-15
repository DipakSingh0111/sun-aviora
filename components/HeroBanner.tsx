"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import siteData from "@/data/sun-aviora.json";

export default function HeroBanner() {
  const { heroBanner } = siteData;

  return (
    <section className="relative w-full min-h-[420px] sm:min-h-[480px] md:min-h-[540px] lg:min-h-[600px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center sm:bg-[center_top] bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url('${heroBanner.backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-12 md:py-16">
        <div className="max-w-2xl text-left">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 mb-4 sm:mb-6"
          >
            <span className="text-white/95 text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase">
              {heroBanner.badge}
            </span>
            <span className="w-8 sm:w-12 h-[2.5px] bg-[#fbbf24] rounded-full inline-block" />
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black uppercase leading-[1.08] tracking-tight">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="block text-white drop-shadow-md"
            >
              {heroBanner.titleLine1}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="block text-[#ffb703] drop-shadow-md"
            >
              {heroBanner.titleLine2}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
            className="mt-5 sm:mt-7 text-base sm:text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-xl"
          >
            {heroBanner.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="mt-8 sm:mt-10"
          >
            <Link
              href={heroBanner.ctaButton.href}
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#ff9f00] to-[#ffb703] hover:from-[#f59e0b] hover:to-[#eab308] text-[#0f2e48] font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0"
            >
              <span>{heroBanner.ctaButton.label}</span>
              {heroBanner.ctaButton.showArrow && (
                <svg
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              )}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
