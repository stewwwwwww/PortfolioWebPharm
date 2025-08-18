import { useEffect, useRef } from "react";

export const useAnimateContainer = (hasData = true) => {
  const containerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (hasData) {
          Array.from(entry.target.children).forEach((item) => {
            item.style.opacity = "0";
          });
        }
        if (entry.isIntersecting && hasData) {
          Array.from(entry.target.children).forEach((item, i) => {
            item.classList.add("animate-fadeUp");
            item.style.animationDelay = `${0.5 + i * 0.05}s`;
          });
        }
      });
    });

    if (containerRef.current && containerRef.current.children.length > 0) {
      observer.observe(containerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [containerRef, hasData]);

  return containerRef;
};
