import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import type { SectionProps } from "@/types/sun-aviora.types";
import { getSunAvioraSections } from "@/lib/sun-aviora";

export default function Footer({ data }: SectionProps.Footer) {
  const footerData = data || getSunAvioraSections().Footer?.variants?.SunAvioraFooter1;
  if (!footerData) return null;

  const getSocialIcon = (platform?: string) => {
    switch (platform) {
      case "facebook":
        return <FaFacebookF className="w-4 h-4" />;
      case "twitter":
        return <FaXTwitter className="w-4 h-4" />;
      case "instagram":
        return <FaInstagram className="w-4 h-4" />;
      case "linkedin":
        return <FaLinkedinIn className="w-4 h-4" />;
      case "youtube":
        return <FaYoutube className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <footer className="w-full bg-[#081f2c] text-white font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 md:pt-20 pb-12">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-white/10">
          <div className="col-span-2 lg:col-span-4 flex flex-col pr-0 lg:pr-6">
            <Link href={footerData.logo.href || "/"} className="inline-block mb-6">
              <Image
                src={footerData.logo.src}
                alt={footerData.logo.alt}
                width={350}
                height={100}
                className="h-14 sm:h-16 md:h-18 lg:h-[72px] w-auto object-contain"
              />
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              {footerData.description}
            </p>
          </div>

          <div className="col-span-1 lg:col-span-2 flex flex-col">
            <div className="relative mb-6">
              <h4 className="text-lg font-bold text-white tracking-wide">
                {footerData.quickLinks.title}
              </h4>
              <div className="w-7 h-[2.5px] bg-[#22c55e] rounded-full mt-2" />
            </div>

            <ul className="space-y-3">
              {footerData.quickLinks.list.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#22c55e] transition-colors group"
                  >
                    <FiChevronRight className="w-4 h-4 text-[#22c55e] transition-transform group-hover:translate-x-1" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-3 flex flex-col">
            <div className="relative mb-6">
              <h4 className="text-lg font-bold text-white tracking-wide">
                {footerData.services.title}
              </h4>
              <div className="w-7 h-[2.5px] bg-[#22c55e] rounded-full mt-2" />
            </div>

            <ul className="space-y-3">
              {footerData.services.list.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#22c55e] transition-colors group"
                  >
                    <FiChevronRight className="w-4 h-4 text-[#22c55e] transition-transform group-hover:translate-x-1" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-3 flex flex-col">
            <div className="relative mb-6">
              <h4 className="text-lg font-bold text-white tracking-wide">
                {footerData.contact.title}
              </h4>
              <div className="w-7 h-[2.5px] bg-[#22c55e] rounded-full mt-2" />
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-full bg-[#16a34a] flex items-center justify-center text-white shadow-md">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-sm">
                  <span className="font-bold text-white">
                    {footerData.contact.address.title}
                  </span>
                  {footerData.contact.address.lines.map((l, i) => (
                    <span key={i} className="text-gray-300 leading-snug">
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="shrink-0 w-11 h-11 rounded-full bg-[#16a34a] flex items-center justify-center text-white shadow-md">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-sm">
                  <span className="font-bold text-white">
                    {footerData.contact.phone.title}
                  </span>
                  <a
                    href={`tel:${footerData.contact.phone.value}`}
                    className="text-gray-300 hover:text-[#22c55e] transition-colors"
                  >
                    {footerData.contact.phone.value}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="shrink-0 w-11 h-11 rounded-full bg-[#16a34a] flex items-center justify-center text-white shadow-md">
                  <FiMail className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-sm">
                  <span className="font-bold text-white">
                    {footerData.contact.email.title}
                  </span>
                  <a
                    href={`mailto:${footerData.contact.email.value}`}
                    className="text-gray-300 hover:text-[#22c55e] transition-colors"
                  >
                    {footerData.contact.email.value}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            {footerData.copyright}
          </p>

          <div className="flex items-center gap-3">
            {footerData.socials.map((soc) => (
              <a
                key={soc.platform || soc.name}
                href={soc.href || soc.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={soc.platform || soc.name}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#16a34a] flex items-center justify-center text-white transition-all duration-200 transform hover:-translate-y-0.5"
              >
                {getSocialIcon(soc.platform || soc.icon)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
