import type { Metadata } from "next";
import { Fraunces, Work_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Sertão Caps",
  description: "Bonés personalizados com identidade de sertão",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${workSans.variable} ${spaceMono.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}