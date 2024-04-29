import type { Metadata } from "next";
import { NunitoSans } from "@/ui/fonts";
import "./globals.css";
import { NavBar } from "@/ui/navbar/navbar";
import ParticlesComp from "@/ui/particles";
import ArrowNavigator from "@/ui/arrow-navigator";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Franco Duarte",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${NunitoSans.className} px-24`}>
        <Suspense>
          <ParticlesComp />
        </Suspense>
        <div className="relative z-10">
          <NavBar />
          {children}
          <ArrowNavigator />
        </div>
      </body>
    </html>
  );
}
