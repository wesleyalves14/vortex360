import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  badge?: string;
  title1: string;
  title2: string;
  subtitle?: string;
  noBg?: boolean;
  noVignette?: boolean;
  className?: string;
};

export function HeroGeometric({
  badge = "VORTEX360",
  title1,
  title2,
  subtitle,
  noBg = true,
  noVignette = true,
  className,
}: Props) {
  return (
    <section
      id="hero"
      className={cn(
        "relative isolate overflow-hidden py-24 sm:py-32",
        "bg-transparent",
        className
      )}
    >
      {/* Animated background shapes removidos: o BG é global */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            {badge}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 bg-clip-text text-transparent">
              {title1}
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {title2}
            </span>
          </h1>
          {subtitle ? (
            <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg">{subtitle}</p>
          ) : null}
        </div>
      </div>

      {/* Vinheta superior/inferior opcional */}
      {!noVignette && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
      )}
    </section>
  );
}
