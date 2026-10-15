import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PiSolarPanelFill } from "react-icons/pi";
import { BsBatteryCharging } from "react-icons/bs";
import { FaTools, FaUsers } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Breadcrumb from "@/components/common/Breadcrumb";
import { getSunAvioraSections } from "@/lib/sun-aviora";

export const metadata: Metadata = {
  title: "Our Services - SunAviora",
  description:
    "Explore our complete range of clean solar energy solutions, rooftop panel installation, battery storage, and maintenance.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sun: PiSolarPanelFill,
  Zap: BsBatteryCharging,
  Wrench: FaTools,
  Users: FaUsers,
};

export default function ServicesPage() {
  const sections = getSunAvioraSections();
  const servicesVariant = sections.Services?.variants?.SunAvioraServices1;
  const pageBanner = sections.PageBanners?.variants?.SunAvioraPageBanners1?.pages?.services;

  const header = servicesVariant?.page?.header || {
    badge: servicesVariant?.badge || "OUR SERVICES",
    heading: {
      main: servicesVariant?.heading?.main || "Services",
      highlight: servicesVariant?.heading?.highlight || " Offered",
    },
    description: servicesVariant?.description || "",
  };

  const servicesList = servicesVariant?.page?.list || servicesVariant?.list || [];

  return (
    <main className="w-full flex flex-col font-sans">
      <Breadcrumb
        data={pageBanner}
        title={pageBanner?.title || "Our Services"}
        breadcrumbs={pageBanner?.breadcrumbs || [
          { label: "Home", href: "/" },
          { label: "Our Services" },
        ]}
      />

      <section className="py-14 md:py-20 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-[#16a34a]" />
              <span className="text-[#16a34a] font-semibold text-sm uppercase tracking-wider">
                {header.badge}
              </span>
              <span className="h-[2px] w-8 bg-[#16a34a]" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#0f172a] mb-4 leading-tight tracking-tight">
              {header.heading?.main}
              <span className="text-[#16a34a]">{header.heading?.highlight}</span>
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {header.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {servicesList.map((service) => {
              const Icon = iconMap[service.icon] || PiSolarPanelFill;
              const isGreen = service.theme === "green";

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-[26px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden border border-gray-100 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div className="relative w-full">
                    <div className="relative h-64 w-full overflow-hidden rounded-t-[26px]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer ${
                          isGreen
                            ? "bg-[#dcfce7] text-[#16a34a] hover:bg-[#16a34a] hover:text-white"
                            : "bg-[#fef9c3] text-[#ca8a04] hover:bg-[#f59e0b] hover:text-white"
                        }`}
                      >
                        <FiArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
