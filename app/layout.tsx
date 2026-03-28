import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";
import AnimationProvider from "@/components/providers/AnimationProvider";

export const metadata: Metadata = {
  title: "Gayathri Sanyasi | B2B Sales Account Manager",
  description:
    "Enterprise B2B Sales Account Manager specializing in technology and hospitality sectors. $3.03M revenue delivered, 105% quota achievement.",
  keywords: [
    "B2B sales",
    "account manager",
    "enterprise sales",
    "Gayathri Sanyasi",
    "Dell Technologies",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-sans antialiased">
        <AnimationProvider>
          <SmoothScroll>
            <Navbar />
            <main className="pt-20">{children}</main>
            <Footer />
          </SmoothScroll>
        </AnimationProvider>
      </body>
    </html>
  );
}
