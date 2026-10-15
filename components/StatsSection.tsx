"use client";

import React, { useEffect, useRef, useState } from "react";
import { PiSolarPanelFill } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { FaHardHat } from "react-icons/fa";
import { LuTrophy } from "react-icons/lu";
import data from "@/data/sun-aviora.json";

function StatIcon({ type }: { type: string }) {
  const iconProps = { className: "w-8 h-8 text-[#15803d]" };
  switch (type) {
    case "Solar":
      return <PiSolarPanelFill {...iconProps} />;
    case "Clients":
      return <HiOutlineUserGroup {...iconProps} />;
    case "Engineer":
      return <FaHardHat {...iconProps} />;
    case "Trophy":
      return <LuTrophy {...iconProps} />;
    default:
      return <PiSolarPanelFill {...iconProps} />;
  }
}

function Counter({
  target,
  duration = 1800,
  isDecimal = false,
}: {
  target: number;
  duration?: number;
  isDecimal?: boolean;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const steps = 60;
    const stepTime = duration / steps;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return (
    <span ref={elementRef}>
      {isDecimal ? count.toFixed(1) : Math.floor(count)}
    </span>
  );
}

export default function StatsSection() {
  const { statsSection } = data;

  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${statsSection.backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-[#061826]/80 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsSection.stats.map((item, index) => (
            <div
              key={item.id}
              className="relative backdrop-blur-md bg-white/[0.07] border border-white/20 rounded-[22px] p-6 sm:p-7 flex items-center gap-5 transition-all duration-300 hover:bg-white/[0.14] hover:border-white/40 hover:-translate-y-1"
            >
              <div className="shrink-0 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#eefaf3] flex items-center justify-center shadow-inner transition-transform duration-300 hover:rotate-6">
                <StatIcon type={item.icon} />
              </div>

              <div className="flex flex-col">
                <div className="flex items-baseline text-white font-extrabold text-3xl sm:text-4xl tracking-tight leading-none">
                  <Counter target={item.value} isDecimal={item.isDecimal} />
                  <span className="text-[#84cc16] ml-0.5">{item.suffix}</span>
                </div>

                <p className="mt-2 text-white/90 text-sm sm:text-[15px] font-medium leading-snug">
                  {item.label}
                </p>

                <div className="mt-2.5 w-7 h-[3px] bg-[#84cc16] rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
