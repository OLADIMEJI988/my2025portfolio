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
  title: "Oladimeji Sholanke - Frontend Developer",
  description:
    "Frontend Developer specializing in React, Next.js, JavaScript, and Tailwind CSS. I build responsive, high-performance interfaces with clean code, smooth interactions, and a strong focus on modern UI/UX. Open to remote and freelance frontend roles globally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-lines`}
      >
        {children}
      </body>
    </html>
  );
}
