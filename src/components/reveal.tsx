"use client";

import { ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export function Reveal({ children, className = "" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
