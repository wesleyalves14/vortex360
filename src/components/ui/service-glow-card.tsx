"use client";
import * as React from "react";
import { GlowCard } from "@/components/ui/spotlight-card";
// Local util to avoid external clsx dependency
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type Color = "blue" | "purple" | "green" | "red" | "orange";
type Size = "sm" | "md" | "lg";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: Color;
  size?: Size;
}

/** Wrapper padrão para todos os cards de serviço (mesmo tamanho/estética) */
export function ServiceGlowCard({
  glowColor = "blue",
  size = "md",
  className,
  children,
  ...rest
}: Props) {
  return (
    <GlowCard
      glowColor={glowColor}
      size={size}
      customSize
      className={cn(
        "w-[320px] h-[360px] p-6 rounded-2xl text-white/90 backdrop-blur",
        className
      )}
      {...rest}
    >
      <div className="flex h-full flex-col justify-between gap-2">
        {children}
      </div>
    </GlowCard>
  );
}
