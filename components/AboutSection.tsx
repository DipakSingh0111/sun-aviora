"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import siteData from "@/data/sun-aviora.json";

export default function AboutSection({ showCta = true }: { showCta?: boolean }) {
  const { aboutUs } = siteData;

  return (
    <section className="w-full pt-12 md:pt-16 pb-4 md:pb-6 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2.5px] bg-[#fbbf24] rounded-full inline-block" />
              <span className="text-[#15803d] font-semibold text-base sm:text-lg tracking-tight">
                {aboutUs.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0f2e48] leading-[1.15] tracking-tight">
              Building a{" "}
              <span className="text-[#15803d] block sm:inline">
                Sustainable Future
              </span>
            </h2>

            <div className="mt-6 sm:mt-8 space-y-5 text-gray-600 text-base sm:text-[17px] leading-relaxed">
              {aboutUs.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {showCta && (
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 sm:mt-10"
              >
                <Link
                  href={aboutUs.ctaButton.href}
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#ff9f00] to-[#ffb703] hover:from-[#f59e0b] hover:to-[#eab308] text-[#0f2e48] font-bold text-base shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <span>{aboutUs.ctaButton.label}</span>
                  {aboutUs.ctaButton.showArrow && (
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
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 relative w-full flex flex-col items-center"
          >
            <div className="relative w-full max-w-[560px] pb-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-[85%] sm:w-[82%] ml-auto mr-4 sm:mr-8 z-10"
              >
                <div className="absolute -top-3 -left-3 w-16 sm:w-20 h-16 sm:h-20 rounded-tl-[24px] border-t-8 border-l-8 border-[#ffb703] pointer-events-none -z-10" />

                <div className="relative overflow-hidden rounded-[24px] shadow-lg border-[3px] border-white aspect-[16/10]">
                  <Image
                    src={aboutUs.images.topImage}
                    alt="SunAviora Solar Engineer"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-[92%] sm:w-[90%] -mt-16 sm:-mt-24 z-20"
              >
                <div className="absolute -bottom-3 -right-3 w-16 sm:w-20 h-16 sm:h-20 rounded-br-[24px] border-b-8 border-r-8 border-[#15803d] pointer-events-none -z-10" />

                <div className="relative overflow-hidden rounded-[24px] shadow-2xl border-[4px] border-white aspect-[16/9]">
                  <Image
                    src={aboutUs.images.bottomImage}
                    alt="Sustainable Modern Solar Home"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
