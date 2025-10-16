"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";

const __DEBUG__ = process.env.NODE_ENV !== "production";

export default function GlassHeader() {
  const headerRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const header = headerRef.current;
    if (!header) return;

    const computeReach = () => {
      if (!headerRef.current) return;
      const root = headerRef.current;
      const rootRect = root.getBoundingClientRect();
      let maxBottom = rootRect.bottom;

      root.querySelectorAll<HTMLElement>("*").forEach((element) => {
        const style = window.getComputedStyle(element);
        const opacityValue = style.opacity.trim();
        const isHiddenOpacity = opacityValue !== "" && Number.parseFloat(opacityValue) === 0;
        if (style.display === "none" || style.visibility === "hidden" || isHiddenOpacity) {
          return;
        }

        const rect = element.getBoundingClientRect();
        if (!rect.width && !rect.height) {
          return;
        }

        maxBottom = Math.max(maxBottom, rect.bottom);
      });

      const reach = Math.max(0, maxBottom - rootRect.top);
      const reachValue = Math.ceil(reach);
      const heightValue = Math.ceil(rootRect.height);

      document.documentElement.style.setProperty("--vortex-header-reach", `${reachValue}px`);
      document.documentElement.style.setProperty("--vortex-header-h", `${heightValue}px`);

      if (__DEBUG__) {
        console.info("[HEADER]", { reach: reachValue, height: heightValue });
      }
    };

    const resizeObserver =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(computeReach) : null;
    const observeTree = () => {
      if (!resizeObserver) return;
      resizeObserver.observe(header);
      header.querySelectorAll<HTMLElement>("*").forEach((element) => resizeObserver.observe(element));
    };
    observeTree();

    const mutationObserver =
      typeof MutationObserver !== "undefined"
        ? new MutationObserver(() => {
            observeTree();
            computeReach();
          })
        : null;
    mutationObserver?.observe(header, { childList: true, subtree: true, attributes: true });

    window.addEventListener("resize", computeReach, { passive: true });
    window.addEventListener("orientationchange", computeReach);

    computeReach();
    const t1 = window.setTimeout(computeReach, 50);
    const t2 = window.setTimeout(computeReach, 250);

    return () => {
      resizeObserver?.disconnect();
      mutationObserver?.disconnect();
      window.removeEventListener("resize", computeReach);
      window.removeEventListener("orientationchange", computeReach);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      role="banner"
      data-site-header
      className="fixed inset-x-0 top-0 z-[999] flex justify-center pointer-events-none"
    >
      {/* Moldura com gradiente (borda) */}
      <div
        className="
        pointer-events-auto
        px-3 py-2
        rounded-full
        bg-gradient-to-r from-indigo-300/35 via-white/25 to-rose-300/35
        p-[1px] shadow-[0_8px_30px_rgba(0,0,0,0.3)]
        transition-transform duration-200 hover:-translate-y-0.5
      "
      >
        {/* Corpo vidro */}
        <div
          className="
          rounded-full
          backdrop-blur-xl
          bg-white/6
          border border-white/15
          px-5 md:px-6
        "
        >
          <nav className="flex items-center gap-3 sm:gap-4 md:gap-6 min-w-[280px] sm:min-w-[320px]">
            {/* Logo / Marca */}
            <Link href="/" className="select-none text-xs sm:text-sm font-semibold text-white/90">
              VORTEX360
            </Link>

            {/* Separator */}
            <div className="h-5 w-px bg-white/15 hidden sm:block" />

            {/* Links */}
            <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/70">
              <Link href="/servicos" className="hover:text-white/90 transition">
                Serviços
              </Link>
              <Link href="/cases" className="hover:text-white/90 transition">
                Cases
              </Link>
              <Link href="/blog" className="hover:text-white/90 transition">
                Blog
              </Link>
            </div>

            {/* Espaçador */}
            <div className="grow" />

            {/* CTA */}
            <Link
              href="#contato"
              className="
                text-xs sm:text-sm font-medium
                rounded-full
                px-3 py-1
                bg-white/8 hover:bg-white/12
                text-white/90
                border border-white/10
                transition
              "
            >
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
