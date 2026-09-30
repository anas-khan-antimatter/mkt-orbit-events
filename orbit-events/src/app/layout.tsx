import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    "We craft unforgettable experiences. Orbit Events is a premium event planning and experiential marketing agency. Void-black production, laser-white precision, cyan-aura atmosphere.",
  openGraph: {
    title: "Orbit Events — Premium Event Planning & Experiential Agency",
    description:
      "Void-black event production for brands that refuse to settle for ordinary.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-[#030303] text-[#f8f8f2]`}
    >
      <body className="min-h-full flex flex-col bg-[#030303] text-[#f8f8f2] selection:bg-[#00b8d4] selection:text-[#030303]">
        {children}
      </body>
    </html>
  );
}