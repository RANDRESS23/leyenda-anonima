import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leyenda Anónima - Juego de adivinar personajes",
  description: "Un juego de adivinar personarjes de distintas temáticas, como videojuegos, películas, series, etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen screen overflow-x-hidden font-mono relative`}
      >
        <Image alt="Imagen estilo televisón CRT" width="1920" height="1080" src="/images/crt.webp" className="fixed w-screen h-screen select-none pointer-events-none z-50 inset-0" />
        <div className="interlaced"></div>
        
        {children}
        
        <div className="tv-scan pointer-events-none fixed inset-0 z-50"></div>
        <div className="tv-flicker pointer-events-none fixed inset-0 z-40"></div>
      </body>
    </html>
  );
}
