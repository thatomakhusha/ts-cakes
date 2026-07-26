import type { Metadata } from "next";
import { Inter, Playfair_Display, Patrick_Hand } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const patrickHand = Patrick_Hand({
  variable: "--font-patrick-hand",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "T's Cakes | Custom Cakes & Handmade Treats",
    description:
        "Custom cakes, cupcakes and freshly baked treats made with love in Pretoria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} ${patrickHand.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}