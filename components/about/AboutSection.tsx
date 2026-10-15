"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { SectionProps } from "@/types/sun-aviora.types";
import { getSunAvioraSections } from "@/lib/sun-aviora";

export default function AboutSection({
  data,
  showCta = true,
}: SectionProps.AboutUs) {
  const aboutData =
    data || getSunAvioraSections().AboutUs?.variants?.SunAvioraAboutUs1;
  if (!aboutData) return null;

  const topImage =
    (aboutData as any).images?.top ||
    (aboutData as any).image?.src ||
    "/images/sun-aviora_01.jpg";
  const bottomImage =
    (aboutData as any).images?.bottom ||
    (aboutData as any).image?.src ||
    "/images/Hero-banner.png";
  const imageAlt =
    (aboutData as any).image?.alt || "SunAviora Solar Installation";
  const features = (aboutData as any).features || [
    "High-Efficiency Solar Modules",
    "25+ Years Performance Warranty",
    "Expert Engineering & Installation",
    "24/7 Monitoring & Support",
  ];
  const experienceYears = (aboutData as any).experienceCard?.years || "15+";
  const experienceText =
    (aboutData as any).experienceCard?.text ||
    "Years of Excellence in Solar Energy";
  const headingHighlight = (aboutData as any).heading?.highlight || "";

  return (
    <section className="w-full pt-12 md:pt-16 pb-12 md:pb-16 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-gray-100"
            >
              <Image
                src={topImage}
                alt={imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </motion.div>

            {/* Floating Experience Box */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md border border-gray-100 rounded-3xl p-5 shadow-2xl flex items-center gap-4 max-w-[280px]"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#ffb703] flex items-center justify-center text-[#0f2e48] font-black text-2xl shadow-inner shrink-0">
                {experienceYears}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#0f2e48]">
                {experienceText}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 mb-3"
            >
              <span className="w-8 h-[2px] bg-[#16a34a]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#16a34a] uppercase">
                {aboutData.badge}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2e48] leading-[1.15] tracking-tight uppercase"
            >
              {aboutData.heading.main}{" "}
              {headingHighlight && (
                <span className="text-[#16a34a]">{headingHighlight}</span>
              )}
            </motion.h2>

            {/* Description Paragraphs */}
            <div className="mt-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              {aboutData.paragraphs?.map((para, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Features Checkpoints */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature: string, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#16a34a] shrink-0">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-[#0f2e48]">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            {showCta && aboutData.cta && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-10"
              >
                <Link
                  href={aboutData.cta.href}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-sm tracking-wider uppercase shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  {aboutData.cta.label}
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
