import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiFolder,
  FiMapPin,
  FiZap,
  FiGrid,
  FiLayers,
  FiServer,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiChevronRight,
} from "react-icons/fi";
import { PiLeafBold } from "react-icons/pi";
import { BsArrowRightCircle } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { HiLightBulb } from "react-icons/hi2";
import PageBanner from "@/components/common/PageBanner";
import data from "@/data/sun-aviora.json";

function SpecIcon({ type }: { type: string }) {
  const iconProps = { className: "w-4 h-4 text-[#16a34a] shrink-0" };
  switch (type) {
    case "Folder":
      return <FiFolder {...iconProps} />;
    case "MapPin":
      return <FiMapPin {...iconProps} />;
    case "Zap":
      return <FiZap {...iconProps} />;
    case "Grid":
      return <FiGrid {...iconProps} />;
    case "Layers":
      return <FiLayers {...iconProps} />;
    case "Server":
      return <FiServer {...iconProps} />;
    case "Leaf":
      return <PiLeafBold {...iconProps} />;
    case "Clock":
      return <FiClock {...iconProps} />;
    default:
      return <FiFolder {...iconProps} />;
  }
}

export default function ProjectDetailClient() {
  const { projectDetailData } = data;
  const { banner, heroSection, relatedProjects, overview, challengesSolutions, resultsImpact } =
    projectDetailData;

  return (
    <main className="w-full flex flex-col font-sans">
      <PageBanner
        title={banner.title}
        breadcrumbs={banner.breadcrumbs}
      />

      <section className="py-14 md:py-20 px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto w-full bg-white">
        {/* Top Hero Container with Floating Specifications Card */}
        <div className="relative w-full rounded-[34px] overflow-hidden shadow-lg border border-gray-100 min-h-[380px] sm:min-h-[460px] md:min-h-[500px]">
          <Image
            src={heroSection.image}
            alt="Solar Power Plant Installation"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1400px) 100vw, 1400px"
          />

          {/* Floating Right Specifications Card */}
          <div className="relative md:absolute md:top-6 md:right-6 md:bottom-6 z-10 w-full md:w-[420px] lg:w-[460px] p-4 md:p-0">
            <div className="bg-white/95 backdrop-blur-md rounded-[28px] p-6 sm:p-7 shadow-2xl border border-white/80 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0f2e48] mb-4 pb-3 border-b border-gray-100">
                  {heroSection.specCard.titlePrefix}
                  <span className="text-[#16a34a]">
                    {heroSection.specCard.titleHighlight}
                  </span>
                </h3>

                <div className="space-y-2.5">
                  {heroSection.specCard.specs.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs sm:text-[13px] py-1 border-b border-gray-50 last:border-b-0"
                    >
                      <span className="flex items-center gap-2 text-gray-500 font-medium">
                        <SpecIcon type={item.icon} />
                        {item.label}
                      </span>
                      <span className="font-bold text-[#0f2e48] text-right">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mt-14 items-start">
          
          {/* Left Column: Related Projects Card */}
          <aside className="lg:col-span-4 flex flex-col">
            <div className="bg-[#0c2a38] text-white rounded-[28px] p-6 sm:p-7 shadow-xl sticky top-28">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-6 h-[2.5px] bg-[#fbbf24] rounded-full" />
                <h3 className="text-lg font-bold text-white tracking-wide">
                  Related Project
                </h3>
              </div>

              <div className="space-y-4">
                {relatedProjects.map((rel) => (
                  <Link
                    key={rel.id}
                    href="/projects"
                    className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-sm">
                        <Image
                          src={rel.image}
                          alt={rel.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <h4 className="text-xs sm:text-[13px] font-bold text-white group-hover:text-[#22c55e] transition-colors line-clamp-2 leading-snug">
                          {rel.title}
                        </h4>
                        <span className="text-[11px] text-[#fbbf24] font-medium mt-1">
                          {rel.location}
                        </span>
                      </div>
                    </div>

                    <div className="shrink-0 text-white/50 group-hover:text-[#22c55e] transition-colors pr-1">
                      <BsArrowRightCircle className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Column: Overview, Challenges & Solutions, Results */}
          <div className="lg:col-span-8 flex flex-col min-w-0">
            {/* Project Overview */}
            <div>
              <div className="relative mb-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2e48]">
                  {overview.titlePrefix}
                  <span className="text-[#16a34a]">{overview.titleHighlight}</span>
                </h2>
                <div className="w-10 h-[3px] bg-[#fbbf24] rounded-full mt-2" />
              </div>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {overview.description}
              </p>
            </div>

            {/* Challenges & Solutions */}
            <div className="mt-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2e48] mb-6">
                {challengesSolutions.titlePrefix}
                <span className="text-[#16a34a]">
                  {challengesSolutions.titleHighlight}
                </span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Challenges Card */}
                <div className="p-6 rounded-[24px] bg-[#fef2f2]/60 border border-red-100 flex flex-col justify-start">
                  <div className="flex items-center gap-2 mb-4 text-[#ef4444]">
                    <LuSettings2 className="w-5 h-5 stroke-[2.2]" />
                    <h3 className="text-base sm:text-lg font-bold text-[#0f2e48]">
                      Challenges
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {challengesSolutions.challenges.map((c, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-gray-700 leading-snug"
                      >
                        <FiXCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions Card */}
                <div className="p-6 rounded-[24px] bg-[#f0fdf4]/80 border border-green-100 flex flex-col justify-start">
                  <div className="flex items-center gap-2 mb-4 text-[#16a34a]">
                    <HiLightBulb className="w-5 h-5" />
                    <h3 className="text-base sm:text-lg font-bold text-[#0f2e48]">
                      Solutions
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {challengesSolutions.solutions.map((s, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-gray-700 leading-snug"
                      >
                        <FiCheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Results & Impact */}
            <div className="mt-10">
              <div className="relative mb-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2e48]">
                  {resultsImpact.titlePrefix}
                  <span className="text-[#16a34a]">
                    {resultsImpact.titleHighlight}
                  </span>
                </h2>
                <div className="w-10 h-[3px] bg-[#fbbf24] rounded-full mt-2" />
              </div>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {resultsImpact.description}
              </p>

              <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] rounded-[28px] overflow-hidden shadow-lg border border-gray-100 mt-6">
                <Image
                  src={resultsImpact.bottomImage}
                  alt="Solar Power Plant Result"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
