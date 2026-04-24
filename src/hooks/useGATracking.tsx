import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "@/lib/gtag";

export function useScrollDepth() {
  const thresholds = useRef(new Set<number>());
  const location = useLocation();

  useEffect(() => {
    thresholds.current.clear();

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const percent = Math.round((window.scrollY / scrollHeight) * 100);

      for (const mark of [25, 50, 75, 100]) {
        if (percent >= mark && !thresholds.current.has(mark)) {
          thresholds.current.add(mark);
          trackEvent("scroll_depth", {
            depth: mark,
            page: location.pathname,
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);
}

export function useRouteTracking() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: location.pathname,
        page_title: document.title,
      });
    }
  }, [location.pathname]);
}
