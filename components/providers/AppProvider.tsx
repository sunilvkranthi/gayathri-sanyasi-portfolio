"use client";

import { useState } from "react";
import InitialLoader from "@/components/animations/InitialLoader";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";
import AnimationProvider from "@/components/providers/AnimationProvider";
import ScrollToTop from "@/components/animations/ScrollToTop";
import PageTransition from "@/components/animations/PageTransition";

export default function AppProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading && <InitialLoader onFinish={() => setLoading(false)} />}

            {!loading && (
                <AnimationProvider>
                    <SmoothScroll>
                        <Navbar />
                        <PageTransition>
                            <ScrollToTop />
                            <main className="pt-[calc(4rem+env(safe-area-inset-top,0px))] sm:pt-[calc(5rem+env(safe-area-inset-top,0px))] min-h-[100dvh]">
                                {children}
                            </main>
                        </PageTransition>
                        <Footer />
                    </SmoothScroll>
                </AnimationProvider>
            )}
        </>
    );
}