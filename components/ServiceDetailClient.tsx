"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiChevronRight, FiFileText, FiHeadphones } from "react-icons/fi";
import { LuSettings2 } from "react-icons/lu";
import { FaTools } from "react-icons/fa";
import { TbCoinRupee } from "react-icons/tb";
import { PiShieldCheckFill, PiLeafBold, PiChartBarFill, PiPlantBold } from "react-icons/pi";
import data from "@/data/sun-aviora.json";

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
  const iconProps = { className: "w-6 h-6 text-[#16a34a]" };
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

interface ServiceDetailClientProps {
  initialServiceId?: string;
}

export default function ServiceDetailClient({
  initialServiceId = "hybrid-wind-solar",
}: ServiceDetailClientProps) {
  const { serviceDetailData } = data;
  const { sidebarList, defaultService } = serviceDetailData;

  const [activeServiceId, setActiveServiceId] = useState<string>(initialServiceId);

  const getServiceData = (id: string) => {
    const item = sidebarList.find((s) => s.id === id);
    const title = item ? item.name : "Hybrid Wind & Solar";

    if (id === "solar-installation") {
      return {
        ...defaultService,
        badge: "Our Service",
        titlePrefix: "Solar ",
        titleHighlight: "Panel Installation",
        mainImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop",
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
        mainImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
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
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] rounded-[30px] overflow-hidden shadow-lg border border-gray-100">
            <Image
              src={currentService.mainImage}
              alt={currentService.titlePrefix + currentService.titleHighlight}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 850px"
            />
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
                className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md"
              >
                <Image
                  src={imgUrl}
                  alt={`Solar hybrid installation step ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Delivery Process Section */}
          <div className="mt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2e48] leading-tight">
              {currentService.deliverySection.titlePrefix}
              <span className="text-[#16a34a]">
                {currentService.deliverySection.titleHighlight}
              </span>
            </h2>

            <p className="mt-2 text-gray-600 text-xs sm:text-[14.5px] leading-relaxed">
              {currentService.deliverySection.description}
            </p>

            <div className="mt-6 space-y-4">
              {currentService.deliverySection.steps.map((step) => (
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
              {currentService.whyChoose.titlePrefix}
              <span className="text-[#16a34a]">
                {currentService.whyChoose.titleHighlight}
              </span>
            </h2>

            <p className="mt-2 text-gray-600 text-xs sm:text-[14.5px] leading-relaxed">
              {currentService.whyChoose.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5 mt-6">
              {currentService.whyChoose.cards.map((c) => (
                <div
                  key={c.id}
                  className="p-5 rounded-2xl bg-[#f8fafc] border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#eaf8ef] flex items-center justify-center mb-3">
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
    </section>
  );
}
