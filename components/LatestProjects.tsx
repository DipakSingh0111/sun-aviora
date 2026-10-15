"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiHome } from "react-icons/hi2";
import { BsBuildingsFill, BsBatteryCharging } from "react-icons/bs";
import { PiPlantFill } from "react-icons/pi";
import { FiArrowUpRight } from "react-icons/fi";
import data from "@/data/sun-aviora.json";

function ProjectIcon({ type }: { type: string }) {
  const iconProps = { className: "w-8 h-8 text-[#15803d]" };
  switch (type) {
    case "Home":
      return <HiHome {...iconProps} />;
    case "Building":
      return <BsBuildingsFill {...iconProps} />;
    case "Plant":
      return <PiPlantFill {...iconProps} />;
    case "Battery":
      return <BsBatteryCharging {...iconProps} />;
    default:
      return <HiHome {...iconProps} />;
  }
}

export default function LatestProjects() {
  const { latestProjects } = data;

  return (
    <section className="pt-10 md:pt-16 pb-4 md:pb-6 px-6 sm:px-10 lg:px-16 bg-white font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#16a34a]" />
            <span className="text-[#16a34a] font-semibold text-sm uppercase tracking-wider">
              {latestProjects.badge}
            </span>
            <span className="w-8 h-[2px] bg-[#16a34a]" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#0f172a] mb-4">
            {latestProjects.titlePrefix}
            <span className="text-[#16a34a]">
              {latestProjects.titleHighlight}
            </span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {latestProjects.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestProjects.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[26px] shadow-[0_6px_25px_rgb(0,0,0,0.06)] overflow-hidden border border-gray-100 flex flex-col group transition-shadow duration-300 hover:shadow-[0_16px_36px_rgb(0,0,0,0.12)]"
            >
              <Link href={`/projects/${project.id}`} className="block">
                <div className="relative h-56 sm:h-60 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <div className="p-5 flex items-center justify-between gap-3 bg-white">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="shrink-0 w-14 h-14 rounded-full bg-[#eaf8ef] flex items-center justify-center border border-[#d2f3dd] transition-transform duration-300 group-hover:rotate-6 shadow-sm">
                      <ProjectIcon type={project.icon} />
                    </div>

                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-bold tracking-wider text-[#16a34a] uppercase">
                        {project.category}
                      </span>
                      <h3 className="text-[15px] sm:text-base font-bold text-[#0f172a] truncate group-hover:text-[#16a34a] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-xs truncate">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#16a34a] flex items-center justify-center text-white shadow-sm transition-transform duration-200 group-hover:scale-110">
                    <FiArrowUpRight className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
