"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PiSolarPanelFill } from "react-icons/pi";
import { BsBatteryCharging } from "react-icons/bs";
import { FaTools, FaUsers } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import data from "@/data/sun-aviora.json";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sun: PiSolarPanelFill,
  Zap: BsBatteryCharging,
  Wrench: FaTools,
  Users: FaUsers,
};

export default function ServicesSection() {
  const { sectionHeader, services } = data;

  return (
    <section className="pt-2 md:pt-4 pb-12 md:pb-16 px-6 sm:px-10 lg:px-16 bg-white font-sans overflow-hidden">
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
              {sectionHeader.subtitle}
            </span>
            <span className="h-[2px] w-8 bg-[#16a34a]" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            {sectionHeader.titlePrefix}
            <span className="text-[#16a34a]">
              {sectionHeader.titleHighlight}
            </span>
            {sectionHeader.titleSuffix}
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {sectionHeader.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
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

                  <div className="absolute -top-1 -left-1 z-20">
                    <div className="bg-white p-1.5 rounded-br-[28px] rounded-tl-[24px]">
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center text-white border-[3px] border-white shadow-md ${
                          isGreen ? "bg-[#15803d]" : "bg-[#f59e0b]"
                        }`}
                      >
                        <Icon className="w-7 h-7" />
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
                      <FiArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
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
