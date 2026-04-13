"use client";

import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    const fallback = window.setTimeout(() => setInView(true), 650);

    if (!node || typeof IntersectionObserver === "undefined") {
      return () => window.clearTimeout(fallback);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(node);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return { ref, inView };
}
