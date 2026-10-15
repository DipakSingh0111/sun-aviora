"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TbCoinRupee } from "react-icons/tb";
import { LuSettings2 } from "react-icons/lu";
import { PiShieldCheckFill, PiLeafBold } from "react-icons/pi";
import data from "@/data/sun-aviora.json";

function FeatureIcon({ type }: { type: string }) {
  const iconProps = { className: "w-8 h-8 text-[#16a34a]" };
  switch (type) {
    case "Currency":
      return <TbCoinRupee {...iconProps} />;
    case "Gear":
      return <LuSettings2 {...iconProps} />;
    case "Leaf":
      return <PiLeafBold {...iconProps} />;
    default:
      return <PiShieldCheckFill {...iconProps} />;
  }
}

export default function WhyChooseUs() {
  const { whyChooseUs } = data;

  return (
    <section className="py-10 md:py-10 px-6 sm:px-10 lg:px-16 bg-white font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative w-full flex justify-start"
          >
            <div className="relative w-full max-w-[620px] pb-10">
              <div className="absolute -top-6 -left-6 w-36 h-36 bg-[#e2f7ea] rounded-[38px] -z-10" />
              <div className="absolute -bottom-4 -left-6 w-28 h-28 bg-[#e2f7ea] rounded-[30px] -z-10" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full sm:w-[90%] overflow-hidden rounded-[36px] border-[5px] border-white shadow-xl aspect-[4/3] sm:min-h-[420px] md:min-h-[460px]"
              >
                <Image
                  src={whyChooseUs.images.largeImage}
                  alt="Solar Panels Installation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="absolute -bottom-4 -right-2 sm:-right-4 w-[62%] sm:w-[60%] overflow-hidden rounded-[34px] border-[6px] border-white shadow-2xl aspect-[4/3] sm:min-h-[260px] md:min-h-[290px] z-10"
              >
                <Image
                  src={whyChooseUs.images.smallImage}
                  alt="Solar Engineers Inspecting Panels"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 60vw, 30vw"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col items-start mt-4 lg:mt-0"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#16a34a]" />
              <span className="text-[#16a34a] font-semibold text-sm uppercase tracking-wider">
                {whyChooseUs.badge}
              </span>
              <span className="w-8 h-[2px] bg-[#16a34a]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0f172a] leading-[1.2] tracking-tight">
              {whyChooseUs.titlePrefix}
              <span className="text-[#16a34a] block sm:inline">
                {whyChooseUs.titleHighlight}
              </span>
            </h2>

            <p className="mt-5 text-gray-600 text-base leading-relaxed">
              {whyChooseUs.description}
            </p>

            <div className="mt-8 space-y-6 w-full">
              {whyChooseUs.features.map((feature, idx) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-4 sm:gap-5"
                >
                  <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#eaf8ef] flex items-center justify-center border border-[#d2f3dd] transition-transform duration-300 hover:rotate-6">
                    <FeatureIcon type={feature.icon} />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0f172a]">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
