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
  title: "Kampus | Your Campus, Simplified",
  description:
    "Kampus.fun – Student marketplace for textbooks, furniture, rides, housing, and events.",
  icons: { icon: "/favicon.ico" },
  keywords: [
    "Kampus",
    "student marketplace",
    "UF",
    "textbooks",
    "rides",
    "housing",
    "events",
  ],
  openGraph: {
    title: "Kampus | Your Campus, Simplified",
    description:
      "The UF student marketplace for textbooks, furniture, rides, housing, and events.",
    url: "https://kampus.fun",
    siteName: "Kampus",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kampus | Your Campus, Simplified",
    description:
      "The UF student marketplace for textbooks, furniture, rides, housing, and events.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
