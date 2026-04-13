"use client";

import { ReactNode, useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export function Reveal({ children, className = "" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${mounted && !inView ? "reveal-pending" : ""} ${mounted && inView ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
