"use client";

import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Blog", href: "#blog" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="sticky top-4 z-50 mx-4 mt-4 rounded-2xl bg-black/15 border border-white/10 backdrop-blur-md px-6 py-3 flex items-center justify-between">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="#inicio" className="flex items-center gap-2" aria-label="VORTEX360 - Início">
          <span className="text-xl font-extrabold tracking-tight text-white">VORTEX</span>
          <span className="text-xl font-extrabold tracking-tight text-[#00E5FF]">360</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="#diagnostico"
            className="rounded-full bg-[#00E5FF] px-4 py-2 text-sm font-semibold text-black shadow-[0_0_20px_rgba(0,229,255,0.45)] transition-transform hover:scale-[1.02] hover:shadow-[0_0_32px_rgba(0,229,255,0.6)]"
          >
            Solicite um Diagnóstico
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
        >
          {/* Hamburger / Close icon */}
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {open ? (
              <path
                d="M6 6l12 12M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <div className="space-y-2 border-t border-white/10 px-4 pb-4 pt-3 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-md px-2 py-2 text-sm font-medium text-white/90 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#diagnostico"
              className="mt-2 block rounded-full bg-[#00E5FF] px-4 py-2 text-center text-sm font-semibold text-black shadow-[0_0_20px_rgba(0,229,255,0.45)] hover:shadow-[0_0_32px_rgba(0,229,255,0.6)]"
              onClick={() => setOpen(false)}
            >
              Solicite um Diagnóstico
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
