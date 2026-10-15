"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { SectionProps } from "@/types/sun-aviora.types";
import { getSunAvioraSections } from "@/lib/sun-aviora";

export default function Navbar({ data }: SectionProps.Header) {
  const headerData = data || getSunAvioraSections().Header?.variants?.SunAvioraHeader1;
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (!headerData) return null;

  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      {headerData.topBar?.visible && (
        <div
          className="w-full h-1 sm:h-1.5"
          style={{ backgroundColor: headerData.topBar.backgroundColor }}
        />
      )}

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href={headerData.logo.href || "/"} className="flex items-center shrink-0">
            <Image
              src={headerData.logo.src}
              alt={headerData.logo.alt}
              width={350}
              height={100}
              priority
              className="h-14 sm:h-16 md:h-18 lg:h-[72px] w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {headerData.menu.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 rounded-full text-[16px] font-semibold tracking-tight transition-colors duration-200 group"
                >
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      isActive
                        ? "text-[#15803d] font-bold"
                        : "text-[#0f2e48] group-hover:text-[#15803d]"
                    }`}
                  >
                    {link.label}
                  </span>

                  <span className="absolute inset-0 rounded-full bg-[#16a34a]/10 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out -z-0" />

                  {isActive ? (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-3 right-3 h-[3px] bg-[#16a34a] rounded-full shadow-[0_2px_8px_rgba(22,163,74,0.4)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2.5px] bg-[#16a34a] rounded-full group-hover:w-6 transition-all duration-300 ease-out" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link
              href={headerData.cta.href}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#ff9f00] to-[#ffb703] hover:from-[#f59e0b] hover:to-[#eab308] text-[#0f2e48] font-bold text-[16px] shadow-sm hover:shadow-md transition-all duration-200"
            >
              <span>{headerData.cta.label}</span>
              {headerData.cta.showArrow && (
                <svg
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              )}
            </Link>
          </div>

          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#0f2e48] hover:text-[#16a34a]"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-gray-100 bg-white px-6 py-5 shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col gap-2">
              {headerData.menu.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-semibold py-2.5 px-3 rounded-xl flex items-center justify-between transition-colors ${
                      isActive
                        ? "bg-[#16a34a]/10 text-[#16a34a] font-bold"
                        : "text-[#0f2e48] hover:bg-gray-50 hover:text-[#16a34a]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#16a34a]" />
                    )}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-gray-100">
                <Link
                  href={headerData.cta.href}
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#ff9f00] to-[#ffb703] text-[#0f2e48] font-bold text-base"
                >
                  <span>{headerData.cta.label}</span>
                  {headerData.cta.showArrow && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                  )}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
