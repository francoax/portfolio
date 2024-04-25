import type { Metadata } from "next";
import { NunitoSans } from "@/ui/fonts";
import "./globals.css";
import { NavBar } from "@/ui/navbar";

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
      <body className={NunitoSans.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
