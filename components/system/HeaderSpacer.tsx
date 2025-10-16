"use client";

import { useEffect, useRef, useState } from "react";

type CSSVars = React.CSSProperties & {
  ["--header-h"]?: string;
};

export default function HeaderSpacer() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [h, setH] = useState<number>(64);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const pickHeader = () =>
      (document.querySelector("header") as HTMLElement | null) ||
      (document.querySelector("[data-site-header]") as HTMLElement | null) ||
      (document.querySelector("nav[role='navigation']") as HTMLElement | null) ||
      (document.querySelector("nav[data-header]") as HTMLElement | null);

    let header = pickHeader();

    const update = () => {
      header = header || pickHeader();
      const rect = header?.getBoundingClientRect();
      const height = Math.ceil((rect?.height ?? 64) + 0);
      setH(height);
      ref.current?.style.setProperty("--header-h", `${height}px`);
    };

    const ro = header ? new ResizeObserver(update) : null;
    header && ro?.observe(header);
    window.addEventListener("resize", update, { passive: true });

    requestAnimationFrame(update);
    setTimeout(update, 50);
    setTimeout(update, 250);

    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-header-spacer
      className="block sm:hidden"
      style={
        {
          height: `max(${h}px, calc(env(safe-area-inset-top) + ${h}px))`,
          ["--header-h"]: `${h}px`,
        } as CSSVars
      }
    />
  );
}
