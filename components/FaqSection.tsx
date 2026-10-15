"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import data from "@/data/sun-aviora.json";

export default function FaqSection() {
  const { faqPage } = data;
  const { leftCard, rightSection } = faqPage;

  const [openId, setOpenId] = useState<string>("1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-white font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative w-full flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[480px]">
              <div className="relative z-10 w-full min-h-[580px] sm:min-h-[640px] rounded-[36px] overflow-hidden border border-gray-100 shadow-[0_12px_40px_rgb(0,0,0,0.08)] flex flex-col justify-between bg-[#f8fafc]">
                <Image
                  src={leftCard.image}
                  alt="Solar Engineers in Field"
                  fill
                  className="object-cover object-bottom transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 480px"
                  priority
                />

                <div className="relative z-20 p-7 sm:p-8 pt-8">
                  <div className="flex items-center gap-3 mb-3.5">
                    <span className="w-8 h-[2.5px] bg-[#f59e0b] rounded-full" />
                    <span className="text-[#15803d] font-bold text-sm tracking-wider uppercase">
                      {leftCard.badge}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-[36px] font-black text-[#0f2e48] leading-[1.18] tracking-tight">
                    {leftCard.titleLine1}{" "}
                    <span className="block">{leftCard.titleLine2}</span>
                    <span className="text-[#15803d] block mt-1">
                      {leftCard.titleHighlight}
                    </span>
                  </h2>

                  <p className="mt-4 text-gray-700 text-sm sm:text-[15px] font-medium leading-relaxed max-w-sm">
                    {leftCard.description}
                  </p>

                  <div className="mt-4 w-9 h-[3.5px] bg-[#f59e0b] rounded-full" />
                </div>

                <div className="relative z-10 h-72 sm:h-80 pointer-events-none" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-start min-w-0"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#16a34a]" />
              <span className="text-[#16a34a] font-semibold text-sm uppercase tracking-wider">
                {rightSection.badge}
              </span>
              <span className="w-8 h-[2px] bg-[#16a34a]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0f172a] leading-[1.2] tracking-tight">
              {rightSection.titlePrefix}
              <span className="text-[#16a34a]">
                {rightSection.titleHighlight}
              </span>
            </h2>

            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              {rightSection.description}
            </p>

            <div className="mt-8 space-y-3.5">
              {rightSection.faqs.map((faq, index) => {
                const isOpen = openId === faq.id;

                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                    className="rounded-2xl overflow-hidden transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className={`w-full flex items-center justify-between gap-4 p-5 text-left font-bold text-base sm:text-[17px] transition-all duration-300 cursor-pointer rounded-2xl ${
                        isOpen
                          ? "bg-[#0c4e4b] text-white shadow-md"
                          : "bg-[#f8fafc] hover:bg-[#f1f5f9] text-[#0f2e48] border border-gray-100"
                      }`}
                    >
                      <span className="leading-snug">{faq.question}</span>

                      <span
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                          isOpen
                            ? "bg-[#eab308] text-[#0c4e4b] rotate-180"
                            : "bg-[#dcfce7] text-[#16a34a] rotate-0"
                        }`}
                      >
                        {isOpen ? (
                          <FiMinus className="w-4 h-4 stroke-[3]" />
                        ) : (
                          <FiPlus className="w-4 h-4 stroke-[3]" />
                        )}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 py-4.5 text-gray-600 text-sm sm:text-[15px] leading-relaxed bg-[#f8fafc] border-x border-b border-gray-100 rounded-b-2xl -mt-1">
                            <p>{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
