"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronRight, FiFileText, FiHeadphones, FiMaximize2, FiX } from "react-icons/fi";
import { LuSettings2 } from "react-icons/lu";
import { FaTools } from "react-icons/fa";
import { TbCoinRupee } from "react-icons/tb";
import { PiShieldCheckFill, PiLeafBold, PiChartBarFill, PiPlantBold } from "react-icons/pi";
import { getSunAvioraSections } from "@/lib/sun-aviora";
import type { ServicesData } from "@/types/sun-aviora.types";

function StepIcon({ type }: { type: string }) {
  const iconProps = { className: "w-5 h-5 text-white stroke-[2.2]" };
  switch (type) {
    case "FileText":
      return <FiFileText {...iconProps} />;
    case "Gear":
      return <LuSettings2 {...iconProps} />;
    case "Wrench":
      return <FaTools {...iconProps} />;
    case "Headphones":
      return <FiHeadphones {...iconProps} />;
    default:
      return <FiFileText {...iconProps} />;
  }
}

function FeatureCardIcon({ type }: { type: string }) {
  const iconProps = { className: "w-7 h-7 text-[#16a34a]" };
  switch (type) {
    case "Leaf":
      return <PiLeafBold {...iconProps} />;
    case "Currency":
      return <TbCoinRupee {...iconProps} />;
    case "Gear":
      return <LuSettings2 {...iconProps} />;
    case "BarChart":
      return <PiChartBarFill {...iconProps} />;
    case "ShieldCheck":
      return <PiShieldCheckFill {...iconProps} />;
    case "Plant":
      return <PiPlantBold {...iconProps} />;
    default:
      return <PiLeafBold {...iconProps} />;
  }
}

export interface ServiceDetailClientProps {
  initialServiceId?: string;
  data?: ServicesData["serviceDetails"];
}

export default function ServiceDetailClient({
  initialServiceId = "hybrid-wind-solar",
  data,
}: ServiceDetailClientProps) {
  const sections = getSunAvioraSections();
  const serviceDetailData =
    data || sections.Services?.variants?.SunAvioraServices1?.serviceDetails;

  const sidebarList = serviceDetailData?.sidebarList || [];
  const defaultService = serviceDetailData?.defaultService || ({} as any);

  const [activeServiceId, setActiveServiceId] = useState<string>(initialServiceId);
  const [fullScreenImage, setFullScreenImage] = useState<{ src: string; alt: string } | null>(null);

  const getServiceData = (id: string) => {
    const item = sidebarList.find((s) => s.id === id);
    const title = item ? item.name : "Hybrid Wind & Solar";

    if (id === "solar-installation") {
      return {
        ...defaultService,
        badge: "Our Service",
        titlePrefix: "Solar ",
        titleHighlight: "Panel Installation",
        mainImage: "/images/sun-aviora_01.jpg",
        tagline: "High-efficiency residential and commercial rooftop solar installation with maximum lifetime energy yield.",
        description: "Our certified engineers handle everything from preliminary solar site assessment, structural load checking, net metering liaisoning to turnkey commissioning of high-tier monocrystalline solar arrays.",
      };
    }

    if (id === "inverter-battery-solutions") {
      return {
        ...defaultService,
        badge: "Our Service",
        titlePrefix: "Inverter & ",
        titleHighlight: "Battery Storage Solutions",
        mainImage: "/images/sun-aviora_02.jpg",
        tagline: "Uninterrupted 24/7 power backup with smart lithium iron phosphate (LiFePO4) energy storage systems.",
        description: "Never worry about blackout or fluctuating grid power. Our modular battery banks store abundant daytime solar energy and seamlessly power high-draw appliances through the night.",
      };
    }

    return {
      ...defaultService,
      titlePrefix: title.split(" ")[0] + " ",
      titleHighlight: title.split(" ").slice(1).join(" ") || "Solutions",
    };
  };

  const currentService = getServiceData(activeServiceId);

  return (
    <section className="py-14 md:py-20 px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto w-full bg-white font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Sidebar: Our Services List */}
        <aside className="lg:col-span-4 flex flex-col">
          <div className="bg-white rounded-[26px] p-6 sm:p-7 border border-gray-100 shadow-[0_6px_25px_rgb(0,0,0,0.05)] sticky top-28">
            <h3 className="text-xl font-extrabold text-[#0f2e48] mb-5">
              Our Services
            </h3>

            <ul className="space-y-2.5">
              {sidebarList.map((item) => {
                const isActive = activeServiceId === item.id;

                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveServiceId(item.id);
                        window.scrollTo({ top: 350, behavior: "smooth" });
                      }}
                      className={`w-full flex items-center justify-between text-sm sm:text-[14.5px] py-3.5 px-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#eaf8ef] border-[#86efac] text-[#15803d] font-bold shadow-sm"
                          : "bg-white border-gray-100 text-gray-700 hover:border-gray-200 hover:bg-gray-50/80 font-medium"
                      }`}
                    >
                      <span>{item.name}</span>
                      <FiChevronRight
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isActive
                            ? "text-[#15803d] translate-x-1"
                            : "text-gray-400"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Right Main Content */}
        <div className="lg:col-span-8 flex flex-col">
          {/* Main Hero Showcase Image */}
          <div
            onClick={() => setFullScreenImage({ src: currentService.mainImage, alt: currentService.titlePrefix + currentService.titleHighlight })}
            className="group relative w-full aspect-[16/9] sm:aspect-[16/8.5] rounded-[30px] overflow-hidden shadow-lg border border-gray-100 cursor-pointer"
          >
            <Image
              src={currentService.mainImage}
              alt={currentService.titlePrefix + currentService.titleHighlight}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
              sizes="(max-width: 1024px) 100vw, 850px"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="p-3.5 rounded-full bg-white/90 text-[#0f2e48] shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                <FiMaximize2 className="w-5 h-5 text-[#16a34a]" />
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="mt-7">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-6 h-[2px] bg-[#16a34a]" />
              <span className="text-xs font-bold text-[#16a34a] uppercase tracking-wider">
                {currentService.badge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0f2e48] leading-tight tracking-tight">
              {currentService.titlePrefix}
              <span className="text-[#16a34a]">
                {currentService.titleHighlight}
              </span>
            </h1>

            <p className="mt-3 text-gray-700 text-sm sm:text-base font-medium leading-relaxed">
              {currentService.tagline}
            </p>

            <p className="mt-3 text-gray-600 text-xs sm:text-[14.5px] leading-relaxed">
              {currentService.description}
            </p>
          </div>

          {/* Double Sub-Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-8">
            {currentService.subImages.map((imgUrl: string, idx: number) => (
              <div
                key={idx}
                onClick={() => setFullScreenImage({ src: imgUrl, alt: `${currentService.titlePrefix} step ${idx + 1}` })}
                className="group relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md cursor-pointer border border-gray-100"
              >
                <Image
                  src={imgUrl}
                  alt={`Solar hybrid installation step ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 rounded-full bg-white/90 text-[#0f2e48] shadow-md transform scale-75 group-hover:scale-100 transition-transform">
                    <FiMaximize2 className="w-5 h-5 text-[#16a34a]" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Delivery Process Section */}
          <div className="mt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2e48] leading-tight">
              {currentService?.deliverySection?.heading?.main || currentService?.deliverySection?.titlePrefix || "How We Deliver "}
              <span className="text-[#16a34a]">
                {currentService?.deliverySection?.heading?.highlight || currentService?.deliverySection?.titleHighlight || "Hybrid Solutions"}
              </span>
            </h2>

            <p className="mt-2 text-gray-600 text-xs sm:text-[14.5px] leading-relaxed">
              {currentService?.deliverySection?.description}
            </p>

            <div className="mt-6 space-y-4">
              {((currentService?.deliverySection as any)?.steps || (currentService?.deliverySection as any)?.list || []).map((step: any) => (
                <div key={step.id} className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-full bg-[#16a34a] flex items-center justify-center text-white shadow-md">
                    <StepIcon type={step.icon} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-sm sm:text-base font-bold text-[#0f2e48]">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-[13.5px] leading-snug mt-0.5">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Service 6-Cards Grid */}
          <div className="mt-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2e48] leading-tight">
              {currentService?.whyChoose?.heading?.main || currentService?.whyChoose?.titlePrefix || "Why Choose Our "}
              <span className="text-[#16a34a]">
                {currentService?.whyChoose?.heading?.highlight || currentService?.whyChoose?.titleHighlight || "Hybrid Wind & Solar Service?"}
              </span>
            </h2>

            <p className="mt-2 text-gray-600 text-xs sm:text-[14.5px] leading-relaxed">
              {currentService?.whyChoose?.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5 mt-6">
              {((currentService?.whyChoose as any)?.cards || (currentService?.whyChoose as any)?.list || []).map((c: any) => (
                <div
                  key={c.id}
                  className="p-5 rounded-2xl bg-[#f8fafc] border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
                >
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-[#eaf8ef] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                      <FeatureCardIcon type={c.icon} />
                    </div>

                    <h3 className="text-sm sm:text-[15px] font-bold text-[#0f2e48] leading-snug">
                      {c.title}
                    </h3>

                    <p className="text-gray-500 text-xs sm:text-[12.5px] leading-relaxed mt-1.5">
                      {c.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Fullscreen Image Lightbox Modal */}
      <AnimatePresence>
        {fullScreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullScreenImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setFullScreenImage(null);
              }}
              aria-label="Close fullscreen preview"
              className="absolute top-5 right-5 sm:top-8 sm:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
            >
              <FiX className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
            >
              <div className="relative w-full h-[70vh] sm:h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src={fullScreenImage.src}
                  alt={fullScreenImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              <p className="mt-4 text-white/80 text-sm font-medium tracking-wide text-center">
                {fullScreenImage.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
