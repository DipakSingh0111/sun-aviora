"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PiSolarPanelFill } from "react-icons/pi";
import { BsBatteryCharging } from "react-icons/bs";
import { FaTools, FaUsers } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import type { SectionProps } from "@/types/sun-aviora.types";
import { getSunAvioraSections } from "@/lib/sun-aviora";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sun: PiSolarPanelFill,
  Zap: BsBatteryCharging,
  Wrench: FaTools,
  Users: FaUsers,
};

export default function ServicesSection({
  data,
  showAll = false,
}: SectionProps.Services) {
  const servicesData = data || getSunAvioraSections().Services?.variants?.SunAvioraServices1;
  if (!servicesData) return null;

  const items = showAll && servicesData.page?.list ? servicesData.page.list : servicesData.list;

  return (
    <section className="pt-8 md:pt-12 pb-12 md:pb-16 px-6 sm:px-10 lg:px-16 bg-white font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[2px] w-8 bg-[#16a34a]" />
            <span className="text-[#16a34a] font-semibold text-sm uppercase tracking-wider">
              {servicesData.badge}
            </span>
            <span className="h-[2px] w-8 bg-[#16a34a]" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            {servicesData.heading.main}
            <span className="text-[#16a34a]">
              {servicesData.heading.highlight}
            </span>
            {servicesData.heading.end}
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {servicesData.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((service, index) => {
            const Icon = iconMap[service.icon] || PiSolarPanelFill;
            const isGreen = service.theme === "green";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[26px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden border border-gray-100 flex flex-col justify-between group transition-shadow duration-300 hover:shadow-[0_16px_36px_rgb(0,0,0,0.12)]"
              >
                <div className="relative w-full">
                  <div className="relative h-64 w-full overflow-hidden rounded-t-[26px]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute top-0 left-0 z-20">
                    <div className="bg-white p-1.5 rounded-br-[28px] rounded-tl-[26px]">
                      <div
                        className={`w-15 h-15 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white border-[3px] border-white shadow-md ${
                          isGreen ? "bg-[#15803d]" : "bg-[#f59e0b]"
                        }`}
                      >
                        <Icon className="w-8 h-8 sm:w-8.5 sm:h-8.5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow bg-white">
                  <div>
                    <h3 className="text-xl font-bold text-[#0f172a] mb-2.5">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-end">
                    <Link
                      href={`/services/${service.id}`}
                      aria-label={`Learn more about ${service.title}`}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                        isGreen
                          ? "bg-[#dcfce7] text-[#16a34a] hover:bg-[#16a34a] hover:text-white"
                          : "bg-[#fef9c3] text-[#ca8a04] hover:bg-[#f59e0b] hover:text-white"
                      }`}
                    >
                      <FiArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
