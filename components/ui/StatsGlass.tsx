"use client";

import { motion, useMotionValue, animate, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const controls = animate(mv, value, { duration: 1.4, ease: "easeOut" });
    const unsub = mv.on("change", (v) => setDisplay(Math.round(v).toString()));
    return () => {
      controls.stop();
      unsub();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-rose-200">
      {display}
      {suffix}
    </span>
  );
}

type Stat = { value: number; suffix?: string; label: string };

const stats: Stat[] = [
  { value: 348, label: "Projetos Concluídos" },
  { value: 250, suffix: "%", label: "ROI Médio (%)" },
  { value: 45, suffix: "%", label: "CPL Reduzido (%)" },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function StatsGlass() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 sm:gap-y-8 md:gap-y-10 gap-x-4 md:gap-x-6">
      {stats.map((s, i) => (
        <motion.div
          key={i}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="rounded-2xl p-[1px] bg-gradient-to-r from-indigo-300/10 via-white/5 to-rose-300/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
        >
          <div className="rounded-2xl backdrop-blur-xl bg-white/2 border border-white/4 px-5 py-4 md:px-6 md:py-5">
            <div className="text-3xl md:text-4xl font-bold leading-none tracking-tight text-white">
              <AnimatedNumber value={s.value} suffix={s.suffix ?? ""} />
            </div>
            <div className="mt-2 text-sm text-white/70">{s.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
