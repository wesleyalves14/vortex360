"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  vertical?: boolean;
  reverse?: boolean;
  pauseOnHover?: boolean;
  repeat?: number;
};

export function Marquee({
  children,
  className,
  vertical = false,
  reverse = false,
  pauseOnHover = false,
  repeat = 2,
}: MarqueeProps) {
  const items = Array.from({ length: Math.max(1, repeat) }, () => children);

  const baseAnimName = vertical ? (reverse ? "marqueeYReverse" : "marqueeY") : (reverse ? "marqueeXReverse" : "marqueeX");

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <style>{`
        @keyframes marqueeY { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        @keyframes marqueeYReverse { from { transform: translateY(-50%); } to { transform: translateY(0); } }
        @keyframes marqueeX { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marqueeXReverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>
      <div
        className={cn(
          "flex gap-4 will-change-transform",
          vertical ? "flex-col" : "flex-row",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `${baseAnimName} var(--duration, 30s) linear infinite`,
        }}
      >
        {items.map((chunk, idx) => (
          <div key={idx} className={cn("flex gap-4", vertical ? "flex-col" : "flex-row")}>{chunk}</div>
        ))}
      </div>
    </div>
  );
}

