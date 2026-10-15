"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiUser,
  FiFileText,
  FiArrowRight,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import data from "@/data/sun-aviora.json";

export default function ContactSection() {
  const { contactPage } = data;
  const { header, infoCard, form, mapEmbedUrl } = contactPage;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <FaFacebookF className="w-5 h-5" />;
      case "twitter":
        return <FaXTwitter className="w-5 h-5" />;
      case "instagram":
        return <FaInstagram className="w-5 h-5" />;
      case "linkedin":
        return <FaLinkedinIn className="w-5 h-5" />;
      case "youtube":
        return <FaYoutube className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-white font-sans overflow-hidden">
      <div className="py-14 md:py-20 px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#16a34a]" />
            <span className="text-[#16a34a] font-semibold text-sm uppercase tracking-wider">
              {header.badge}
            </span>
            <span className="w-8 h-[2px] bg-[#16a34a]" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#0f172a] mb-4 leading-tight tracking-tight">
            {header.titlePrefix}
            <span className="text-[#16a34a]">{header.titleHighlight}</span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {header.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-4 relative rounded-[32px] overflow-hidden bg-[#092332] text-white p-7 sm:p-9 flex flex-col justify-between shadow-xl min-h-[560px]">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/Hero-banner.png"
                alt="Solar Farm Sunset"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-[#092332]/80 backdrop-blur-[1px]" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="w-7 h-[2.5px] bg-[#fbbf24] rounded-full" />
                <span className="text-xs font-bold text-[#fbbf24] uppercase tracking-wider">
                  {infoCard.badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-[30px] font-extrabold text-white leading-[1.2]">
                {infoCard.titleLine1}{" "}
                <span className="text-[#22c55e] block">
                  {infoCard.titleHighlight}
                </span>
              </h3>

              <p className="mt-3.5 text-gray-200 text-xs sm:text-[13.5px] leading-relaxed">
                {infoCard.description}
              </p>

              <div className="mt-7 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#16a34a] flex items-center justify-center text-white shadow-lg border border-white/20">
                    <FiMapPin className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div className="flex flex-col text-xs sm:text-[13.5px]">
                    <span className="font-bold text-white text-sm sm:text-[15px]">
                      {infoCard.location.title}
                    </span>
                    <span className="text-gray-200 leading-snug mt-0.5">
                      {infoCard.location.value}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#16a34a] flex items-center justify-center text-white shadow-lg border border-white/20">
                    <FiPhone className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div className="flex flex-col text-xs sm:text-[13.5px]">
                    <span className="font-bold text-white text-sm sm:text-[15px]">
                      {infoCard.phone.title}
                    </span>
                    <a
                      href={`tel:${infoCard.phone.value}`}
                      className="text-gray-200 hover:text-[#22c55e] transition-colors mt-0.5"
                    >
                      {infoCard.phone.value}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#16a34a] flex items-center justify-center text-white shadow-lg border border-white/20">
                    <FiMail className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div className="flex flex-col text-xs sm:text-[13.5px]">
                    <span className="font-bold text-white text-sm sm:text-[15px]">
                      {infoCard.email.title}
                    </span>
                    <a
                      href={`mailto:${infoCard.email.value}`}
                      className="text-gray-200 hover:text-[#22c55e] transition-colors mt-0.5"
                    >
                      {infoCard.email.value}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 mt-6 border-t border-white/10 flex items-center gap-3.5">
              <span className="text-sm font-semibold text-gray-200">
                Follow Us —
              </span>
              <div className="flex items-center gap-2.5">
                {infoCard.socials.map((s) => (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.platform}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#16a34a] hover:scale-110 flex items-center justify-center text-white transition-all duration-200 shadow-sm"
                  >
                    {getSocialIcon(s.platform)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white rounded-[32px] p-7 sm:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="w-6 h-[2px] bg-[#16a34a]" />
                <span className="text-xs font-bold text-[#16a34a] uppercase tracking-wider">
                  {form.badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f2e48] leading-tight">
                {form.titlePrefix}
                <span className="text-[#16a34a]">{form.titleHighlight}</span>
              </h3>

              <p className="mt-2 text-gray-600 text-sm leading-relaxed mb-6">
                {form.description}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <FiUser className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full pl-11 pr-4 py-3.5 bg-white rounded-xl border border-gray-200 text-sm text-[#0f2e48] placeholder-gray-400 focus:outline-none focus:border-[#16a34a] focus:ring-1 focus:ring-[#16a34a] transition-all"
                    />
                  </div>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <FiMail className="w-4 h-4" />
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-11 pr-4 py-3.5 bg-white rounded-xl border border-gray-200 text-sm text-[#0f2e48] placeholder-gray-400 focus:outline-none focus:border-[#16a34a] focus:ring-1 focus:ring-[#16a34a] transition-all"
                    />
                  </div>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <FiPhone className="w-4 h-4" />
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full pl-11 pr-4 py-3.5 bg-white rounded-xl border border-gray-200 text-sm text-[#0f2e48] placeholder-gray-400 focus:outline-none focus:border-[#16a34a] focus:ring-1 focus:ring-[#16a34a] transition-all"
                    />
                  </div>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <FiFileText className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full pl-11 pr-4 py-3.5 bg-white rounded-xl border border-gray-200 text-sm text-[#0f2e48] placeholder-gray-400 focus:outline-none focus:border-[#16a34a] focus:ring-1 focus:ring-[#16a34a] transition-all"
                    />
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    rows={4}
                    required
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full p-4 bg-white rounded-xl border border-gray-200 text-sm text-[#0f2e48] placeholder-gray-400 focus:outline-none focus:border-[#16a34a] focus:ring-1 focus:ring-[#16a34a] transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#15803d] hover:bg-[#16a34a] text-white font-bold text-sm shadow-md transition-all duration-200 cursor-pointer group"
                  >
                    <span>{form.submitButton}</span>
                    <span className="w-6 h-6 rounded-full bg-[#eab308] text-[#0f2e48] flex items-center justify-center transition-transform group-hover:translate-x-1">
                      <FiArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                  </button>

                  {submitted && (
                    <span className="text-sm font-semibold text-[#16a34a] animate-fade-in">
                      ✓ Thank you! Message sent successfully.
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[400px] sm:h-[450px] relative border-t border-gray-200">
        <iframe
          src={mapEmbedUrl}
          title="SunAviora Location Map"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
