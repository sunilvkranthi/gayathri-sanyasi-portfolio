"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
};

export default function Reveal({
    children,
    className = "",
    delay = 0,
}: RevealProps) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        const narrow = window.matchMedia("(max-width: 767px)").matches;

        const ctx = gsap.context(() => {
            if (reducedMotion) {
                gsap.fromTo(
                    el,
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 0.25,
                        delay,
                        ease: "none",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 90%",
                        },
                    }
                );
                return;
            }

            const from = narrow
                ? { opacity: 0, y: 20 }
                : { opacity: 0, y: 40, filter: "blur(6px)" };
            const to = narrow
                ? {
                      opacity: 1,
                      y: 0,
                      duration: 0.55,
                      delay,
                      ease: "power2.out",
                      scrollTrigger: {
                          trigger: el,
                          start: "top 88%",
                      },
                  }
                : {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      duration: 0.9,
                      delay,
                      ease: "power3.out",
                      scrollTrigger: {
                          trigger: el,
                          start: "top 85%",
                      },
                  };

            gsap.fromTo(el, from, to);
        }, ref);

        return () => ctx.revert();
    }, [delay]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}