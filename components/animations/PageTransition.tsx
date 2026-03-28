"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { usePrefersReducedMotion } from "@/hooks/useFinePointer";

export default function PageTransition({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const reducedMotion = usePrefersReducedMotion();
    const duration = reducedMotion ? 0 : 0.2;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: reducedMotion ? 1 : 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: reducedMotion ? 1 : 0 }}
                transition={{
                    duration,
                    ease: "easeOut",
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}