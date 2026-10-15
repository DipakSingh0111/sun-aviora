"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import type { SectionProps } from "@/types/sun-aviora.types";
import { getSunAvioraSections } from "@/lib/sun-aviora";

export default function TestimonialsSection({
  data,
}: SectionProps.Testimonials) {
  const testimonialsData = data || getSunAvioraSections().Testimonials?.variants?.SunAvioraTestimonials1;
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!testimonialsData) return null;

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;
    const cards = sliderRef.current.children;
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      sliderRef.current.scrollTo({
        left: card.offsetLeft - sliderRef.current.offsetLeft,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handleNext = () => {
    const nextIdx = Math.min(activeIndex + 1, testimonialsData.list.length - 1);
    scrollToIndex(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = Math.max(activeIndex - 1, 0);
    scrollToIndex(prevIdx);
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const cardWidth = sliderRef.current.children[0]?.clientWidth || 280;
    const newIdx = Math.round(scrollLeft / cardWidth);
    if (newIdx !== activeIndex && newIdx < testimonialsData.list.length) {
      setActiveIndex(newIdx);
    }
  };

  return (
    <section className="pt-4 md:pt-6 pb-6 md:pb-8 px-6 sm:px-10 lg:px-16 bg-white font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0 flex justify-start">
            <div className="relative w-full max-w-[420px]">
              <div className="absolute -top-3 -left-3 w-28 h-28 border-t-8 border-l-8 border-[#22c55e] rounded-tl-[36px] -z-10" />

              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[32px] border-4 border-white shadow-xl">
                <Image
                  src={testimonialsData.image}
                  alt="Solar Engineer Field Expert"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />

                <div className="absolute bottom-5 left-5 right-5 z-10 bg-[#0c4e4b]/95 backdrop-blur-sm text-white px-5 py-4 rounded-2xl flex items-center gap-3.5 shadow-xl border border-white/10">
                  <div className="shrink-0 text-white text-3xl font-serif leading-none">
                    “
                  </div>
                  <p className="text-xs sm:text-sm font-semibold leading-snug whitespace-pre-line">
                    {testimonialsData.imageBadge.text}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0 flex flex-col justify-start w-full">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-7 h-[2px] bg-[#16a34a]" />
              <span className="text-[#16a34a] font-semibold text-sm tracking-wide">
                {testimonialsData.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] leading-tight tracking-tight">
              {testimonialsData.heading.main}
              <span className="text-[#16a34a]">
                {testimonialsData.heading.highlight}
              </span>
            </h2>

            <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              {testimonialsData.description}
            </p>

            <div
              ref={sliderRef}
              onScroll={handleScroll}
              className="mt-8 flex gap-5 overflow-x-auto scroll-smooth pb-5 pt-1 no-scrollbar snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {testimonialsData.list.map((rev) => (
                <div
                  key={rev.id}
                  className="shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] bg-white rounded-[26px] p-6 shadow-[0_6px_25px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col justify-between snap-start transition-all duration-300 hover:shadow-[0_10px_30px_rgb(0,0,0,0.1)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <FaQuoteLeft className="w-8 h-8 text-[#bbf7d0]" />
                      <div className="flex items-center gap-0.5 text-[#f59e0b]">
                        {[...Array(rev.rating)].map((_, i) => (
                          <FaStar key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed line-clamp-6">
                      {rev.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-3.5 mt-6 pt-5 border-t border-gray-100">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-gray-200">
                      <Image
                        src={rev.avatar}
                        alt={rev.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <h4 className="text-sm font-bold text-[#0f172a] truncate">
                        {rev.author}
                      </h4>
                      <p className="text-gray-500 text-xs truncate">
                        {rev.designation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                type="button"
                onClick={handlePrev}
                disabled={activeIndex === 0}
                aria-label="Previous review"
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                  activeIndex === 0
                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                    : "border-green-200 bg-[#eaf8ef] text-[#16a34a] hover:bg-[#16a34a] hover:text-white cursor-pointer"
                }`}
              >
                <FiArrowLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {testimonialsData.list.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => scrollToIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeIndex === i
                        ? "w-6 bg-[#16a34a]"
                        : "w-2.5 bg-gray-200 hover:bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                disabled={activeIndex >= testimonialsData.list.length - 1}
                aria-label="Next review"
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                  activeIndex >= testimonialsData.list.length - 1
                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                    : "border-green-200 bg-[#eaf8ef] text-[#16a34a] hover:bg-[#16a34a] hover:text-white cursor-pointer"
                }`}
              >
                <FiArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
