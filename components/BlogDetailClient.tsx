"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiCalendar, FiUser, FiChevronRight, FiX, FiMaximize2 } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import data from "@/data/sun-aviora.json";

interface BlogDetailClientProps {
  initialId: string;
}

export default function BlogDetailClient({ initialId }: BlogDetailClientProps) {
  const allPosts = [
    ...(data.blogPage?.posts || []),
    ...(data.blogSection?.posts || []),
  ];

  const [activePostId, setActivePostId] = useState<string>(initialId);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [fullScreenImage, setFullScreenImage] = useState<{ src: string; alt: string } | null>(null);

  const currentPost =
    allPosts.find((p) => p.id === activePostId) ||
    allPosts[0] || {
      title: "How Solar Energy is Changing the Future of Clean Power",
      date: "February 23, 2025",
      category: "Solar Energy",
      image: "/images/sun-aviora_01.jpg",
      description: "Solar energy is no longer just an alternative — it has become a leading solution for a cleaner and greener future.",
    };

  const sidebar = data.blogDetailSidebar || {
    categories: [],
    recentPosts: [],
  };

  const handleCategoryClick = (categoryName: string, targetId?: string) => {
    setSelectedCategory(categoryName);
    if (targetId) {
      setActivePostId(targetId);
      window.scrollTo({ top: 350, behavior: "smooth" });
    } else {
      const match = allPosts.find((p) =>
        p.category?.toLowerCase().includes(categoryName.toLowerCase())
      );
      if (match) {
        setActivePostId(match.id);
        window.scrollTo({ top: 350, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-14 md:py-20 px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto w-full bg-white font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-8 flex flex-col">
          <div
            onClick={() => setFullScreenImage({ src: currentPost.image, alt: currentPost.title })}
            className="group relative w-full aspect-[16/9] sm:aspect-[16/8.5] rounded-[30px] overflow-hidden shadow-lg border border-gray-100 cursor-pointer"
          >
            <Image
              src={currentPost.image}
              alt={currentPost.title}
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

          <div className="flex items-center gap-6 mt-6 text-xs sm:text-sm font-semibold text-gray-500">
            <span className="flex items-center gap-2">
              <FiUser className="w-4 h-4 text-[#16a34a]" />
              By Rohit Sharma
            </span>
            <span className="flex items-center gap-2">
              <FiCalendar className="w-4 h-4 text-[#16a34a]" />
              {currentPost.date}
            </span>
            {currentPost.category && (
              <span className="px-3 py-1 rounded-full bg-[#eaf8ef] text-[#16a34a] font-bold text-xs uppercase">
                {currentPost.category}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-[38px] font-black text-[#0f2e48] mt-4 leading-tight tracking-tight">
            {currentPost.title}
          </h1>

          <div className="mt-5 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            <p>{currentPost.description}</p>
            <p>
              Solar energy is no longer just an alternative — it has become a
              leading solution for a cleaner and greener future. With rising
              electricity costs and increasing environmental concerns, more
              homes and businesses are making the switch to solar power. Solar
              technology is now more efficient, affordable and accessible than
              ever, helping reduce carbon emissions and dependence on traditional
              energy sources.
            </p>
          </div>

          <div className="my-8 p-6 sm:p-7 rounded-2xl bg-[#f4faf6] border-l-4 border-[#16a34a] relative">
            <div className="text-4xl text-[#16a34a] font-serif leading-none mb-2">
              “
            </div>
            <p className="text-gray-700 italic text-sm sm:text-[15.5px] font-medium leading-relaxed">
              Switching to solar energy is not just about saving money, it&apos;s
              about creating a cleaner, healthier and more sustainable
              environment for future generations.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#16a34a]" />
              <span className="text-xs font-bold text-[#0f2e48] uppercase tracking-wider">
                Rohit Sharma
              </span>
            </div>
          </div>

          <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            <p>
              One of the biggest advantages of solar energy is its ability to
              provide long-term savings. Once installed, solar panels generate
              electricity from sunlight, significantly reducing monthly
              electricity bills. It also helps in lowering greenhouse gas
              emissions, making it a vital step towards a cleaner planet.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-8">
            <div
              onClick={() => setFullScreenImage({ src: "/images/sun-aviora_05.jpg", alt: "Solar Engineer inspection" })}
              className="group relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md cursor-pointer border border-gray-100"
            >
              <Image
                src="/images/sun-aviora_05.jpg"
                alt="Solar Engineer inspection"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-3 rounded-full bg-white/90 text-[#0f2e48] shadow-md transform scale-75 group-hover:scale-100 transition-transform">
                  <FiMaximize2 className="w-5 h-5 text-[#16a34a]" />
                </span>
              </div>
            </div>
            <div
              onClick={() => setFullScreenImage({ src: "/images/sun-aviora_06.jpg", alt: "Solar installation on rooftop" })}
              className="group relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md cursor-pointer border border-gray-100"
            >
              <Image
                src="/images/sun-aviora_06.jpg"
                alt="Solar installation on rooftop"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-3 rounded-full bg-white/90 text-[#0f2e48] shadow-md transform scale-75 group-hover:scale-100 transition-transform">
                  <FiMaximize2 className="w-5 h-5 text-[#16a34a]" />
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            <p>
              As technology continues to improve, solar energy is becoming more
              reliable and efficient. Whether for residential, commercial or
              industrial use, it offers a sustainable and cost-effective solution
              to meet growing energy demands while protecting the environment.
            </p>
            <p>
              Investing in renewable infrastructure secures sustainable power for
              decades. Modern solar inverters and battery storage combinations
              allow excess energy to be stored and utilized during nighttime and
              peak power hours without disruption.
            </p>
            <p>
              With continuous governmental incentives, tax credits, and net
              metering schemes available across India, transitioning to clean
              solar power has never been more financially rewarding and
              convenient.
            </p>
          </div>
        </div>

        <aside className="lg:col-span-4 flex flex-col gap-8">
          <div className="bg-white rounded-[26px] p-6 sm:p-7 border border-gray-100 shadow-[0_6px_25px_rgb(0,0,0,0.05)]">
            <div className="relative mb-5">
              <h3 className="text-lg font-bold text-[#0f2e48]">Categories</h3>
              <div className="w-8 h-[2.5px] bg-[#16a34a] rounded-full mt-2" />
            </div>

            <ul className="space-y-3">
              {sidebar.categories.map((cat, i) => {
                const isSelected =
                  selectedCategory === cat.name ||
                  currentPost.category?.toLowerCase() ===
                    (cat.category || cat.name).toLowerCase();

                return (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={() =>
                        handleCategoryClick(cat.category || cat.name, cat.targetId)
                      }
                      className={`w-full flex items-center justify-between text-sm py-1.5 px-2 rounded-xl transition-all cursor-pointer group ${
                        isSelected
                          ? "bg-[#eaf8ef] text-[#16a34a] font-bold"
                          : "text-gray-600 hover:text-[#16a34a]"
                      }`}
                    >
                      <span className="inline-flex items-center gap-2 font-medium">
                        <FiChevronRight
                          className={`w-4 h-4 text-[#16a34a] transition-transform ${
                            isSelected ? "translate-x-1" : "group-hover:translate-x-1"
                          }`}
                        />
                        {cat.name}
                      </span>
                      <span className="text-xs text-gray-400 font-semibold">
                        ({cat.count})
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bg-white rounded-[26px] p-6 sm:p-7 border border-gray-100 shadow-[0_6px_25px_rgb(0,0,0,0.05)]">
            <div className="relative mb-5">
              <h3 className="text-lg font-bold text-[#0f2e48]">Recent Posts</h3>
              <div className="w-8 h-[2.5px] bg-[#16a34a] rounded-full mt-2" />
            </div>

            <div className="space-y-4">
              {sidebar.recentPosts.map((rPost) => (
                <button
                  key={rPost.id}
                  type="button"
                  onClick={() => {
                    setActivePostId(rPost.id);
                    window.scrollTo({ top: 350, behavior: "smooth" });
                  }}
                  className="w-full flex items-center gap-4 group text-left cursor-pointer"
                >
                  <div className="relative w-18 h-18 rounded-xl overflow-hidden shrink-0 shadow-sm border border-gray-100">
                    <Image
                      src={rPost.image}
                      alt={rPost.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="72px"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h4 className="text-xs sm:text-[13px] font-bold text-[#0f2e48] group-hover:text-[#16a34a] transition-colors line-clamp-2 leading-snug">
                      {rPost.title}
                    </h4>
                    <span className="flex items-center gap-1 text-[11px] text-gray-400 mt-1">
                      <FiCalendar className="w-3 h-3 text-[#16a34a]" />
                      {rPost.date}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[26px] p-6 sm:p-7 border border-gray-100 shadow-[0_6px_25px_rgb(0,0,0,0.05)]">
            <div className="relative mb-5">
              <h3 className="text-lg font-bold text-[#0f2e48]">Follow Us</h3>
              <div className="w-8 h-[2.5px] bg-[#16a34a] rounded-full mt-2" />
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#eaf8ef] text-[#16a34a] hover:bg-[#16a34a] hover:text-white flex items-center justify-center transition-colors"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Twitter"
                className="w-10 h-10 rounded-full bg-[#eaf8ef] text-[#16a34a] hover:bg-[#16a34a] hover:text-white flex items-center justify-center transition-colors"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#eaf8ef] text-[#16a34a] hover:bg-[#16a34a] hover:text-white flex items-center justify-center transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-[#eaf8ef] text-[#16a34a] hover:bg-[#16a34a] hover:text-white flex items-center justify-center transition-colors"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-[#eaf8ef] text-[#16a34a] hover:bg-[#16a34a] hover:text-white flex items-center justify-center transition-colors"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </aside>
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
