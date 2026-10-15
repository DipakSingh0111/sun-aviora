"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiCalendar, FiFolder, FiChevronLeft, FiChevronRight, FiChevronRight as FiArrowRight } from "react-icons/fi";
import type { SectionProps } from "@/types/sun-aviora.types";
import { getSunAvioraSections } from "@/lib/sun-aviora";

export default function BlogSection({
  data,
  limit,
}: SectionProps.BlogNews) {
  const blogData = data || getSunAvioraSections().BlogNews?.variants?.SunAvioraBlogNews1;
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!blogData) return null;

  const rawPosts = blogData.list;
  const posts = limit ? rawPosts.slice(0, limit) : rawPosts;

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
    const nextIdx = Math.min(activeIndex + 1, posts.length - 1);
    scrollToIndex(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = Math.max(activeIndex - 1, 0);
    scrollToIndex(prevIdx);
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const cardWidth = sliderRef.current.children[0]?.clientWidth || 300;
    const newIdx = Math.round(scrollLeft / cardWidth);
    if (newIdx !== activeIndex && newIdx < posts.length) {
      setActiveIndex(newIdx);
    }
  };

  return (
    <section className="pt-4 md:pt-6 pb-14 md:pb-20 px-6 sm:px-10 lg:px-16 bg-white font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#16a34a]" />
            <span className="text-[#16a34a] font-semibold text-sm uppercase tracking-wider">
              {blogData.badge}
            </span>
            <span className="w-8 h-[2px] bg-[#16a34a]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0f172a] mb-4 leading-tight tracking-tight lg:whitespace-nowrap">
            {blogData.heading.main}
            <span className="text-[#16a34a]">
              {blogData.heading.highlight}
            </span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {blogData.description}
          </p>
        </motion.div>

        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-4"
        >
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[26px] shadow-[0_6px_25px_rgb(0,0,0,0.06)] overflow-hidden border border-gray-100 flex flex-col justify-between group transition-shadow duration-300 hover:shadow-[0_16px_36px_rgb(0,0,0,0.12)]"
            >
              <div>
                <div className="relative h-52 sm:h-56 w-full overflow-hidden rounded-t-[26px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-3">
                    <span className="flex items-center gap-1.5 text-gray-600">
                      <FiCalendar className="w-3.5 h-3.5 text-[#16a34a]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-600">
                      <FiFolder className="w-3.5 h-3.5 text-[#16a34a]" />
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-[19px] font-bold text-[#0f172a] leading-snug group-hover:text-[#16a34a] transition-colors line-clamp-2 mb-3">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Link
                  href={post.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#16a34a] hover:text-[#15803d] transition-colors group/btn"
                >
                  <span>Read More</span>
                  <span className="w-6 h-6 rounded-full bg-[#16a34a] text-white flex items-center justify-center transition-transform group-hover/btn:translate-x-1">
                    <FiArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous blog posts"
            className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
              activeIndex === 0
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-green-200 bg-[#eaf8ef] text-[#16a34a] hover:bg-[#16a34a] hover:text-white cursor-pointer"
            }`}
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {posts.map((_, i) => (
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
            disabled={activeIndex >= posts.length - 1}
            aria-label="Next blog posts"
            className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
              activeIndex >= posts.length - 1
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-green-200 bg-[#eaf8ef] text-[#16a34a] hover:bg-[#16a34a] hover:text-white cursor-pointer"
            }`}
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
