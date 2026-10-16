"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { SectionProps } from "@/types/sun-aviora.types";
import { getSunAvioraSections } from "@/lib/sun-aviora";

export default function HeroBanner({ data }: SectionProps.HeroBanner) {
  const heroData = data || getSunAvioraSections().HeroBanner?.variants?.SunAvioraHeroBanner1;
  if (!heroData) return null;

  return (
    <section className="relative w-full min-h-[460px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[calc(100vh-80px)] max-h-[820px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center sm:bg-[center_top] bg-no-repeat transition-transform duration-1000 scale-100"
        style={{ backgroundImage: `url('${heroData.backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-14 md:py-16">
        <div className="max-w-2xl text-left">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 mb-3 sm:mb-5"
          >
            <span className="text-white/95 text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase">
              {heroData.badge}
            </span>
            <span className="w-8 sm:w-12 h-[2.5px] bg-[#fbbf24] rounded-full inline-block" />
          </motion.div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[74px] font-black uppercase leading-[1.1] tracking-tight">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="block text-white drop-shadow-md"
            >
              {heroData.heading.main}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="block text-[#ffb703] drop-shadow-md"
            >
              {heroData.heading.highlight}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-white/95 font-medium leading-relaxed max-w-xl"
          >
            {heroData.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="mt-8 sm:mt-10"
          >
            <Link
              href={heroData.cta.href}
              className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 rounded-full bg-gradient-to-r from-[#ff9f00] to-[#ffb703] hover:from-[#f59e0b] hover:to-[#eab308] text-[#0f2e48] font-bold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0"
            >
              <span>{heroData.cta.label}</span>
              {heroData.cta.showArrow && (
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
