import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const productSans = localFont({
  src: [
    { path: "./fonts/ProductSans-Light.ttf",   weight: "300", style: "normal" },
    { path: "./fonts/ProductSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/ProductSans-Medium.ttf",  weight: "500", style: "normal" },
    { path: "./fonts/ProductSans-Bold.ttf",    weight: "700", style: "normal" },
  ],
  variable: "--font-product-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Varosync Intelligence",
  description:
    "Independent risk analysis on clinical-stage assets. Failure-data foundation, sponsor-data gap audit, decomposable scoring.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={productSans.variable}>
      <body>{children}</body>
    </html>
  );
}
