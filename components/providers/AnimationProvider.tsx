"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AnimationProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        ScrollTrigger.refresh();
    }, []);

    return <>{children}</>;
}