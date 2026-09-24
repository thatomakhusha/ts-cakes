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
  title: "Ts Cakes | Tshwari Modise | Custom Cakes & Bakery in Pretoria",
  description:
    "Ts Cakes by Tshwari Modise, also known as Tshwaraganang, creates custom cakes, cupcakes and handmade treats in Pretoria.",
  openGraph: {
    title: "Ts Cakes | Tshwari Modise | Custom Cakes & Bakery in Pretoria",
    description:
      "Custom cakes, cupcakes and handmade treats by Tshwari Modise, also known as Tshwaraganang, in Pretoria.",
    url: "https://tscakes.co.za",
    siteName: "Ts Cakes",
    type: "website",
  },
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
