"use client";

import React, { useEffect, useRef, useState } from "react";
import type { SectionProps } from "@/types/sun-aviora.types";
import { getSunAvioraSections } from "@/lib/sun-aviora";

function StatIcon({ type }: { type: string }) {
  const strokeColor = "#14532d";
  
  if (type === "Solar") {
    return (
      <svg
        className="w-12 h-12 sm:w-14 sm:h-14"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23 18C23 15.79 24.79 14 27 14C29.21 14 31 15.79 31 18H23Z"
          stroke={strokeColor}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M27 8.5V11" stroke={strokeColor} strokeWidth="2.6" strokeLinecap="round" />
        <path d="M20.5 11L22.2 12.7" stroke={strokeColor} strokeWidth="2.6" strokeLinecap="round" />
        <path d="M33.5 11L31.8 12.7" stroke={strokeColor} strokeWidth="2.6" strokeLinecap="round" />
        <path d="M17 16.5H19.5" stroke={strokeColor} strokeWidth="2.6" strokeLinecap="round" />
        <path d="M34.5 16.5H37" stroke={strokeColor} strokeWidth="2.6" strokeLinecap="round" />

        <polygon
          points="13,36 17.5,19.5 36.5,19.5 41,36"
          stroke={strokeColor}
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
        <line x1="15" y1="28" x2="39" y2="28" stroke={strokeColor} strokeWidth="2.2" />
        <line x1="23.5" y1="19.5" x2="22" y2="36" stroke={strokeColor} strokeWidth="2.2" />
        <line x1="30.5" y1="19.5" x2="32" y2="36" stroke={strokeColor} strokeWidth="2.2" />

        <line x1="27" y1="36" x2="27" y2="42" stroke={strokeColor} strokeWidth="2.8" strokeLinecap="round" />
        <line x1="20" y1="42" x2="34" y2="42" stroke={strokeColor} strokeWidth="2.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "Clients") {
    return (
      <svg
        className="w-12 h-12 sm:w-14 sm:h-14"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="12,18 13.2,19.8 15.3,19.9 13.6,21.3 14.2,23.3 12.4,22.1 10.6,23.3 11.2,21.3 9.5,19.9 11.6,19.8"
          stroke={strokeColor}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <polygon
          points="19,13 20.1,14.8 22.2,14.9 20.5,16.3 21.1,18.3 19.3,17.1 17.5,18.3 18.1,16.3 16.4,14.9 18.5,14.8"
          stroke={strokeColor}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <polygon
          points="27,10 28.2,12 30.4,12.1 28.6,13.6 29.2,15.7 27.3,14.4 25.4,15.7 26,13.6 24.2,12.1 26.4,12"
          stroke={strokeColor}
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <polygon
          points="35,13 36.1,14.8 38.2,14.9 36.5,16.3 37.1,18.3 35.3,17.1 33.5,18.3 34.1,16.3 32.4,14.9 34.5,14.8"
          stroke={strokeColor}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <polygon
          points="42,18 43.2,19.8 45.3,19.9 43.6,21.3 44.2,23.3 42.4,22.1 40.6,23.3 41.2,21.3 39.5,19.9 41.6,19.8"
          stroke={strokeColor}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />

        <circle cx="27" cy="26" r="4.3" stroke={strokeColor} strokeWidth="2.6" />
        <path
          d="M20 41C20 35.5 23 33 27 33C31 33 34 35.5 34 41"
          stroke={strokeColor}
          strokeWidth="2.6"
          strokeLinecap="round"
        />

        <circle cx="17" cy="29.5" r="3.4" stroke={strokeColor} strokeWidth="2.3" />
        <path
          d="M11.5 42C11.5 37.5 14.2 35 17.5 35C18.6 35 19.7 35.4 20.6 36"
          stroke={strokeColor}
          strokeWidth="2.3"
          strokeLinecap="round"
        />

        <circle cx="37" cy="29.5" r="3.4" stroke={strokeColor} strokeWidth="2.3" />
        <path
          d="M33.4 36C34.3 35.4 35.4 35 36.5 35C39.8 35 42.5 37.5 42.5 42"
          stroke={strokeColor}
          strokeWidth="2.3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "Engineer") {
    return (
      <svg
        className="w-12 h-12 sm:w-14 sm:h-14"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 19.5C19 14.5 22.5 12 27 12C31.5 12 35 14.5 35 19.5V21H19V19.5Z"
          stroke={strokeColor}
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path d="M27 12V16.5" stroke={strokeColor} strokeWidth="2.6" strokeLinecap="round" />
        <path
          d="M15 21H39"
          stroke={strokeColor}
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M21 21V25C21 28.3 23.7 31 27 31C30.3 31 33 28.3 33 25V21"
          stroke={strokeColor}
          strokeWidth="2.5"
        />

        <path
          d="M16 42V37C16 33 19.5 31.5 22.5 31L24.5 35H29.5L31 32"
          stroke={strokeColor}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <g transform="translate(34, 34)">
          <circle cx="0" cy="0" r="4.3" stroke={strokeColor} strokeWidth="2.4" fill="none" />
          <path
            d="M0 -7.5V-5.2M0 5.2V7.5M-7.5 0H-5.2M5.2 0H7.5M-5.3 -5.3L-3.7 -3.7M3.7 3.7L5.3 5.3M-5.3 5.3L-3.7 3.7M3.7 -3.7L5.3 -5.3"
            stroke={strokeColor}
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </g>
      </svg>
    );
  }

  if (type === "Trophy") {
    return (
      <svg
        className="w-12 h-12 sm:w-14 sm:h-14"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5 13H36.5V24C36.5 29.2 32.2 33.5 27 33.5C21.8 33.5 17.5 29.2 17.5 24V13Z"
          stroke={strokeColor}
          strokeWidth="2.8"
          strokeLinejoin="round"
        />

        <polygon
          points="27,17.5 28.4,20.4 31.4,20.6 29.1,22.5 29.8,25.4 27.2,23.8 24.6,25.4 25.3,22.5 23,20.6 26,20.4"
          stroke={strokeColor}
          strokeWidth="1.8"
          fill="none"
          strokeLinejoin="round"
        />

        <path
          d="M17.5 16.5H13C10.6 16.5 8.5 18.5 8.5 21C8.5 24 11 26.5 14 26.5H17.5"
          stroke={strokeColor}
          strokeWidth="2.6"
          strokeLinecap="round"
        />

        <path
          d="M36.5 16.5H41C43.4 16.5 45.5 18.5 45.5 21C45.5 24 43 26.5 40 26.5H36.5"
          stroke={strokeColor}
          strokeWidth="2.6"
          strokeLinecap="round"
        />

        <path d="M27 33.5V38.5" stroke={strokeColor} strokeWidth="2.8" strokeLinecap="round" />

        <path
          d="M21.5 38.5H32.5"
          stroke={strokeColor}
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M17.5 42H36.5"
          stroke={strokeColor}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return null;
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

export default function StatsSection({ data }: SectionProps.Stats) {
  const statsData = data || getSunAvioraSections().Stats?.variants?.SunAvioraStats1;
  if (!statsData) return null;

  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${statsData.backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-[#061826]/80 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.list.map((item) => (
            <div
              key={item.id}
              className="relative backdrop-blur-md bg-white/[0.07] border border-white/20 rounded-[22px] p-6 sm:p-7 flex items-center gap-5 transition-all duration-300 hover:bg-white/[0.14] hover:border-white/40 hover:-translate-y-1"
            >
              <div className="shrink-0 w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-white flex items-center justify-center shadow-xl border-2 border-white/80 transition-transform duration-300 hover:scale-105">
                <StatIcon type={item.icon} />
              </div>

              <div className="flex flex-col">
                <div className="flex items-baseline text-white font-extrabold text-3xl sm:text-4xl lg:text-[42px] tracking-tight leading-none">
                  <Counter target={item.value} isDecimal={item.isDecimal} />
                  <span className="text-[#84cc16] ml-1">{item.suffix}</span>
                </div>

                <p className="mt-2.5 text-white/95 text-sm sm:text-[15px] font-semibold leading-snug">
                  {item.label}
                </p>

                <div className="mt-3 w-8 h-[3.5px] bg-[#84cc16] rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
