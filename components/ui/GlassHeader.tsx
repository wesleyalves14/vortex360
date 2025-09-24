"use client";

import Link from "next/link";

export default function GlassHeader() {
  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center pointer-events-none">
      {/* Moldura com gradiente (borda) */}
      <div className="
        pointer-events-auto
        px-3 py-2
        rounded-full
        bg-gradient-to-r from-indigo-300/35 via-white/25 to-rose-300/35
        p-[1px] shadow-[0_8px_30px_rgba(0,0,0,0.3)]
        transition-transform duration-200 hover:-translate-y-0.5
      ">
        {/* Corpo vidro */}
        <div className="
          rounded-full
          backdrop-blur-xl
          bg-white/6
          border border-white/15
          px-5 md:px-6
        ">
          <nav className="flex items-center gap-4 md:gap-6">
            {/* Logo / Marca */}
            <Link href="/" className="select-none text-sm font-semibold text-white/90">
              VORTEX360
            </Link>

            {/* Separator */}
            <div className="h-5 w-px bg-white/15 hidden md:block" />

            {/* Links */}
            <div className="hidden md:flex items-center gap-4 text-sm text-white/70">
              <Link href="/servicos" className="hover:text-white/90 transition">Serviços</Link>
              <Link href="/cases" className="hover:text-white/90 transition">Cases</Link>
              <Link href="/blog" className="hover:text-white/90 transition">Blog</Link>
            </div>

            {/* Espaçador */}
            <div className="grow" />

            {/* CTA */}
            <Link
              href="#contato"
              className="
                text-sm font-medium
                rounded-full
                px-3 py-1.5
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
    </div>
  );
}
