import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { NextAuthProvider } from "./provider/next-auth-provider";
import { NextAuthStore } from "./provider/next-auth-store";
import { Foooter } from "@/components/foooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthStore>
          <NextAuthProvider>
            <Header />
            {children}
            <Foooter />
          </NextAuthProvider>
        </NextAuthStore>
      </body>
    </html>
  );
}
