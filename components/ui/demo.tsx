'use client';
import React from 'react';
import { WavePath } from "@/components/ui/wave-path";
import { cn } from '@/lib/utils';

export default function Demo() {
  return (
    <section className="relative w-full py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-end space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-20 px-6 md:px-12">
        <WavePath className="w-full" />
        <div className="flex w-full flex-col items-end">
          <div className="flex justify-end">
            <p className="mt-2 text-white/70 text-xs sm:text-sm md:text-base">Mundo da Arte</p>
            <p className="ml-8 w-full md:w-3/4 text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight md:leading-[1.1] tracking-tight text-balance">
              Vivencie as emoções dos artistas através de suas obras.
              Deixe a beleza da arte inspirar você e preencher sua alma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
