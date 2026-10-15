import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import ContactSection from "@/components/ContactSection";
import data from "@/data/sun-aviora.json";

export const metadata: Metadata = {
  title: "Contact Us - SunAviora",
  description:
    "Get in touch with SunAviora for solar panel installation, consultations, and energy storage inquiries.",
};

export default function ContactPage() {
  const { contactPage } = data;

  return (
    <main className="w-full flex flex-col">
      <Breadcrumb
        title={contactPage.banner.title}
        breadcrumbs={contactPage.banner.breadcrumbs}
      />

      {/* Main Contact Section with Form and Map */}
      <ContactSection />
    </main>
  );
}
