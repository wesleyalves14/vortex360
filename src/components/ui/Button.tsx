import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outlineGlow";
};

export function Button({ className = "", variant = "primary", ...props }: Props) {
  const base = "rounded-full px-4 py-2 text-sm font-semibold transition-all";
  const styles =
    variant === "primary"
      ? "bg-[#00E5FF] text-black shadow-[0_0_20px_rgba(0,229,255,0.45)] hover:scale-[1.02] hover:shadow-[0_0_32px_rgba(0,229,255,0.6)]"
      : "border border-[#00E5FF]/60 text-[#00E5FF] hover:border-[#00E5FF] hover:text-white hover:shadow-[0_0_24px_rgba(0,229,255,0.5)]";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
