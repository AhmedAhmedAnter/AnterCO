import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const integralCF = localFont({
  src: [
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-regularoblique.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-mediumoblique.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-demibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-demiboldoblique.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-boldoblique.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-extraboldoblique.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-heavy.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-heavyoblique.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-integral",
});

export const metadata: Metadata = {
  title: "Anter Co",
  description: "The Biggest Clothes Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", integralCF.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
