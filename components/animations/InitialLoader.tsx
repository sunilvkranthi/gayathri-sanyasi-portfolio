"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const messages = [
    "Analyzing pipeline...",
    "Identifying opportunities...",
    "Optimizing accounts...",
    "Closing high-value deals...",
];

const MAX_REVENUE = 3030000;

export default function InitialLoader({
    onFinish,
}: {
    onFinish: () => void;
}) {
    const [progress, setProgress] = useState(0);
    const [displayValue, setDisplayValue] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        let count = 0;
        const coarse =
            typeof window !== "undefined" &&
            window.matchMedia("(pointer: coarse)").matches;
        const tickMs = coarse ? 85 : 50;

        const interval = setInterval(() => {
            count += coarse ? Math.random() * 3.2 : Math.random() * 4.5;

            if (count >= 100) {
                count = 100;
                clearInterval(interval);

                // ✅ Ensure exact final value
                setDisplayValue(MAX_REVENUE);

                setTimeout(() => {
                    onFinish();
                }, coarse ? 800 : 1200);
            }

            const progressValue = Math.min(100, Math.floor(count));
            setProgress(progressValue);

            // 🎯 STRICT TARGET (NO OVERFLOW)
            const targetRevenue = Math.floor(
                (progressValue / 100) * MAX_REVENUE
            );

            // ✅ CONTROLLED SMOOTHING (NO OVERSHOOT)
            setDisplayValue((prev) => {
                const diff = targetRevenue - prev;
                return prev + diff * (coarse ? 0.22 : 0.15);
            });

            // 🧠 MESSAGE SWITCH
            const msgIndex = Math.min(
                Math.floor((progressValue / 100) * messages.length),
                messages.length - 1
            );
            setMessageIndex(msgIndex);
        }, tickMs);

        return () => clearInterval(interval);
    }, [onFinish]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] bg-surface flex flex-col items-center justify-center px-6 text-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* TITLE */}
            <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl font-black text-on-background mb-5 sm:mb-6 px-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Building Revenue Engine
            </motion.h1>

            {/* GRAPH 📈 (glow layer omitted on narrow viewports — cheaper paint) */}
            <div className="w-[min(100%,18rem)] sm:w-72 h-28 sm:h-32 mb-5 sm:mb-6 relative mx-auto">
                <svg viewBox="0 0 300 100" className="w-full h-full" aria-hidden>
                    <motion.path
                        d="M0,90 Q50,70 100,60 T200,40 T300,20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-primary"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: progress / 100 }}
                        transition={{ ease: "easeOut" }}
                    />

                    <motion.path
                        d="M0,90 Q50,70 100,60 T200,40 T300,20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="6"
                        className="text-primary opacity-20 blur-sm max-md:hidden"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: progress / 100 }}
                    />
                </svg>
            </div>

            {/* 💰 REVENUE COUNTER */}
            <motion.div
                className="text-2xl font-black text-primary mb-2 tabular-nums"
            >
                ${Math.floor(displayValue).toLocaleString()}
            </motion.div>

            {/* PROGRESS BAR */}
            <div className="w-[min(100%,16rem)] sm:w-64 h-2 bg-surface-container-low rounded-full overflow-hidden mb-3 mx-auto">
                <motion.div
                    className="h-full bg-primary"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* STATUS */}
            <motion.p
                key={messageIndex}
                className="text-sm text-outline"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
            >
                {messages[messageIndex]}
            </motion.p>

            {/* FINAL MESSAGE */}
            {progress === 100 && (
                <motion.p
                    className="text-xs text-primary mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    Finalizing insights...
                </motion.p>
            )}

            {/* % */}
            <p className="text-xs text-outline mt-1">
                {progress}% Complete
            </p>
        </motion.div>
    );
}