import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import ContactSection from "@/components/contact/ContactSection";
import { getSunAvioraSections } from "@/lib/sun-aviora";

export const metadata: Metadata = {
  title: "Contact Us - SunAviora",
  description:
    "Get in touch with SunAviora for solar panel installation, consultations, and energy storage inquiries.",
};

export default function ContactPage() {
  const sections = getSunAvioraSections();
  const pageBanner = sections.PageBanners?.variants?.SunAvioraPageBanners1?.pages?.contact;

  return (
    <main className="w-full flex flex-col">
      <Breadcrumb
        data={pageBanner}
        title={pageBanner?.title || "Contact Us"}
        breadcrumbs={pageBanner?.breadcrumbs || [
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      {/* Main Contact Section with Form and Map */}
      <ContactSection data={sections.ContactPage?.variants?.SunAvioraContactPage1} />
    </main>
  );
}
