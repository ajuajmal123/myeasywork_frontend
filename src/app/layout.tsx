import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppHeader } from "@/components/layout/AppHeader";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyEasyWork | Hyperlocal Services",
  description: "Book trusted professionals for your everyday needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F8F9FA] pb-20 lg:pb-0 text-[#1A1A1A] flex flex-col min-h-screen`}>
        <AppHeader />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileBottomNav type="customer" />
      </body>
    </html>
  );
}
