"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

type GlowSize = "sm" | "md" | "lg" | string;

type GlowCardProps = {
  children: React.ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "green" | "red" | "orange" | "indigo" | string;
  size?: GlowSize;
  customSize?: boolean;
};

export function GlowCard({ children, className, glowColor = "indigo", size = "md", customSize = false }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  }

  function handleMouseLeave() {
    const el = cardRef.current;
    if (!el) return;
    el.style.removeProperty("--x");
    el.style.removeProperty("--y");
  }

  const glowMap: Record<string, { shadow: string; ring: string }> = {
    indigo: { shadow: "rgba(99,102,241,0.35)", ring: "rgba(99,102,241,0.20)" },
    blue: { shadow: "rgba(59,130,246,0.35)", ring: "rgba(59,130,246,0.20)" },
    purple: { shadow: "rgba(168,85,247,0.35)", ring: "rgba(168,85,247,0.20)" },
    green: { shadow: "rgba(16,185,129,0.35)", ring: "rgba(16,185,129,0.20)" },
    red: { shadow: "rgba(239,68,68,0.35)", ring: "rgba(239,68,68,0.20)" },
    orange: { shadow: "rgba(249,115,22,0.35)", ring: "rgba(249,115,22,0.20)" },
  };
  const { shadow: hoverShadow, ring: ringColor } = glowMap[glowColor] ?? glowMap["indigo"];

  return (
    <>
      <div
        ref={cardRef}
        data-glow
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          customSize ? "" : "aspect-[3/4]",
          // base visual escuro translúcido
          "relative rounded-3xl p-6 md:p-8 backdrop-blur-md bg-[#0B111A]/60 border border-white/10",
          "shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)] transition-all duration-300 ease-out",
          "hover:bg-white/8 hover:border-white/20",
          // sombra dinâmica conforme cor
          // usamos tailwind arbitrary value para aproximar
          "group overflow-hidden",
          className
        )}
        style={{
          // nota: apenas controla a sombra via inline style
          boxShadow: `0 30px 80px -40px ${hoverShadow}`,
        }}
      >
        {/* layer do glow (posicionada com variáveis --x/--y) */}
        <div
          ref={innerRef}
          data-glow
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              `radial-gradient(600px 300px at var(--x,50%) var(--y,50%), ${ringColor}, transparent 40%)`,
            opacity: 0.6,
          }}
        />

        {/* anel/realce suave no hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px 300px at var(--x,50%) var(--y,50%), ${ringColor}, transparent 40%)`,
          }}
        />

        {/* conteúdo do card (mantém seus textos/children) */}
        <div className="relative z-[1] flex h-full flex-col gap-3">{children}</div>
      </div>
    </>
  );
}
