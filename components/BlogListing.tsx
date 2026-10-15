"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiFolder, FiChevronLeft, FiChevronRight, FiChevronRight as FiArrowRight } from "react-icons/fi";
import data from "@/data/sun-aviora.json";

export default function BlogListing() {
  const { blogPage } = data;
  const { header, posts } = blogPage;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  return (
    <section className="py-14 md:py-20 px-6 sm:px-10 lg:px-16 bg-white font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#16a34a]" />
            <span className="text-[#16a34a] font-semibold text-sm uppercase tracking-wider">
              {header.badge}
            </span>
            <span className="w-8 h-[2px] bg-[#16a34a]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0f172a] mb-4 leading-tight tracking-tight lg:whitespace-nowrap">
            {header.titlePrefix}
            <span className="text-[#16a34a]">{header.titleHighlight}</span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {header.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pb-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-[26px] shadow-[0_6px_25px_rgb(0,0,0,0.06)] overflow-hidden border border-gray-100 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                <div className="relative h-56 sm:h-60 w-full overflow-hidden rounded-t-[26px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

                  <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed line-clamp-3">
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
            </article>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mt-12">
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
              currentPage === 1
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-green-200 bg-[#eaf8ef] text-[#16a34a] hover:bg-[#16a34a] hover:text-white cursor-pointer"
            }`}
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>

          {[1, 2, 3].map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-full text-sm font-bold transition-all cursor-pointer ${
                currentPage === page
                  ? "bg-[#16a34a] text-white shadow-md"
                  : "bg-[#f1f5f9] text-[#0f2e48] hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
              currentPage === totalPages
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
