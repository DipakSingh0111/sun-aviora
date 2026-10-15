import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import data from "@/data/sun-aviora.json";

export default function Footer() {
  const { footer } = data;

  const getSocialIcon = (platform: string) => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          <div className="lg:col-span-4 flex flex-col pr-0 lg:pr-6">
            <Link href={footer.logo.href} className="inline-block mb-6">
              <Image
                src={footer.logo.src}
                alt={footer.logo.alt}
                width={350}
                height={100}
                className="h-14 sm:h-16 md:h-18 lg:h-[72px] w-auto object-contain"
              />
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              {footer.aboutText}
            </p>
          </div>

          <div className="lg:col-span-2 flex flex-col">
            <div className="relative mb-6">
              <h4 className="text-lg font-bold text-white tracking-wide">
                {footer.quickLinks.title}
              </h4>
              <div className="w-7 h-[2.5px] bg-[#22c55e] rounded-full mt-2" />
            </div>

            <ul className="space-y-3">
              {footer.quickLinks.links.map((link) => (
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

          <div className="lg:col-span-3 flex flex-col">
            <div className="relative mb-6">
              <h4 className="text-lg font-bold text-white tracking-wide">
                {footer.ourServices.title}
              </h4>
              <div className="w-7 h-[2.5px] bg-[#22c55e] rounded-full mt-2" />
            </div>

            <ul className="space-y-3">
              {footer.ourServices.links.map((link) => (
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

          <div className="lg:col-span-3 flex flex-col">
            <div className="relative mb-6">
              <h4 className="text-lg font-bold text-white tracking-wide">
                {footer.contact.title}
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
                    {footer.contact.address.title}
                  </span>
                  {footer.contact.address.lines.map((l, i) => (
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
                    {footer.contact.phone.title}
                  </span>
                  <a
                    href={`tel:${footer.contact.phone.value}`}
                    className="text-gray-300 hover:text-[#22c55e] transition-colors"
                  >
                    {footer.contact.phone.value}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="shrink-0 w-11 h-11 rounded-full bg-[#16a34a] flex items-center justify-center text-white shadow-md">
                  <FiMail className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-sm">
                  <span className="font-bold text-white">
                    {footer.contact.email.title}
                  </span>
                  <a
                    href={`mailto:${footer.contact.email.value}`}
                    className="text-gray-300 hover:text-[#22c55e] transition-colors"
                  >
                    {footer.contact.email.value}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            {footer.copyright}
          </p>

          <div className="flex items-center gap-3">
            {footer.socials.map((soc) => (
              <a
                key={soc.platform}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={soc.platform}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#16a34a] flex items-center justify-center text-white transition-all duration-200 transform hover:-translate-y-0.5"
              >
                {getSocialIcon(soc.platform)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
