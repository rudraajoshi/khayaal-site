import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollBar from "@/components/ScrollBar";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
export const metadata: Metadata = { title: "Khayaal — Little thoughts, beautifully made", description: "A handmade art studio. Every creation holds a khayaal." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><head>
      <link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,400;1,500&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet" />
    </head><body><SmoothScroll /><ScrollBar /><Header />{children}<Footer /></body></html>
  );
}
