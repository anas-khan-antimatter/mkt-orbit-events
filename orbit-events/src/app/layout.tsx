import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orbit Events — Premium Event Planning & Experiential Agency",
  description:
    "We craft unforgettable experiences. Orbit Events is a premium event planning and experiential marketing agency for brands that demand extraordinary.",
  openGraph: {
    title: "Orbit Events — Premium Event Planning & Experiential Agency",
    description:
      "We craft unforgettable experiences for brands that demand extraordinary.",
    type: "website",
    siteName: "Orbit Events",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-950 text-stone-100">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}