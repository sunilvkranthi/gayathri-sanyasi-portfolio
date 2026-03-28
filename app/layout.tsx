import type { Metadata } from "next";
import "./globals.css";
import AppProvider from "@/components/providers/AppProvider";

export const metadata: Metadata = {
  title: "Gayathri Sanyasi | B2B Sales Account Manager",
  description:
    "Enterprise B2B Sales Account Manager specializing in technology and hospitality sectors. $3.03M revenue delivered, 105% quota achievement.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
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
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional"
          rel="stylesheet"
        />
      </head>

      <body className="bg-surface text-on-surface font-sans antialiased">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}