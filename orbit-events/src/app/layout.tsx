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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}