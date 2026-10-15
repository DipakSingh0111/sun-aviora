import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HiHome } from "react-icons/hi2";
import { BsBuildingsFill, BsBatteryCharging } from "react-icons/bs";
import { PiPlantFill } from "react-icons/pi";
import { FiArrowUpRight } from "react-icons/fi";
import PageBanner from "@/components/common/PageBanner";
import data from "@/data/sun-aviora.json";

export const metadata: Metadata = {
  title: "Our Projects - SunAviora",
  description:
    "Explore our complete portfolio of rooftop solar, commercial solar farms, and battery storage installations.",
};

function ProjectIcon({ type }: { type: string }) {
  const iconProps = { className: "w-6 h-6 text-[#15803d]" };
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

export default function ProjectsPage() {
  const { projectsPage } = data;
  const { banner, header, projects } = projectsPage;

  return (
    <main className="w-full flex flex-col font-sans">
      <PageBanner
        title={banner.title}
        breadcrumbs={banner.breadcrumbs}
      />

      <section className="py-14 md:py-20 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#16a34a]" />
              <span className="text-[#16a34a] font-semibold text-sm uppercase tracking-wider">
                {header.badge}
              </span>
              <span className="w-8 h-[2px] bg-[#16a34a]" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#0f172a] mb-4 leading-tight tracking-tight">
              {header.titlePrefix}
              <span className="text-[#16a34a]">{header.titleHighlight}</span>
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {header.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-[26px] shadow-[0_6px_25px_rgb(0,0,0,0.06)] overflow-hidden border border-gray-100 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5"
              >
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
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#eaf8ef] flex items-center justify-center border border-[#d2f3dd]">
                      <ProjectIcon type={project.icon} />
                    </div>

                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-bold tracking-wider text-[#16a34a] uppercase">
                        {project.category}
                      </span>
                      <h3 className="text-[15px] sm:text-base font-bold text-[#0f172a] truncate">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-xs truncate">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    aria-label={`View ${project.title}`}
                    className="shrink-0 w-9 h-9 rounded-full bg-[#16a34a] flex items-center justify-center text-white shadow-sm transition-transform duration-200 group-hover:scale-110"
                  >
                    <FiArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
