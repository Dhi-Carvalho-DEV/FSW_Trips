import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "@/providers/auth";
import Header from "../components/Header";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "FSW Trips",
  description: "Sistema de Reserva de Viagens",
};

export default function RootLayout({
children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>
          <Header />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
