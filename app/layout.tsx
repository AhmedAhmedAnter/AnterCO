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

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
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
      className={cn(
        "h-full",
        "antialiased",
        integralCF.variable,
        satoshi.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
