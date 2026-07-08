import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ScrollProgress from "@/components/ui/ScrollProgress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "SysInteractive — IT Solutions & Services",
  description:
    "SysInteractive delivers IT management, cybersecurity, cloud, custom software development, and digital marketing — backed by certified engineers and round-the-clock support since 2005.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body id="top">
        <Topbar />
        <Navbar />
        {children}
        <Footer />
        <ScrollProgress />
        <RevealOnScroll />
      </body>
    </html>
  );
}
