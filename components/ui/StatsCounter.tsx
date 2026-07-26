"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ value }: { value: number }) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1500 });
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => spring.on("change", (latest) => setDisplay(Math.round(latest))), [spring]);

  return <span ref={ref}>{display.toLocaleString("en-IN")}</span>;
}

export function StatsCounter({ stats }: { stats: Array<{ label: string; value: number; suffix?: string }> }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]"
        >
          <p className="text-4xl font-bold text-slate-950 dark:text-white">
            <Counter value={stat.value} />
            {stat.suffix ?? "+"}
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
