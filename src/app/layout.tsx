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
      <body className={`${inter.className} bg-brand-blue text-white flex flex-col min-h-screen selection:bg-brand-gold selection:text-brand-blue`}>
        <AppHeader />
        <main className="flex-1 w-full bg-[#001F3F] text-white">
          {children}
        </main>
        <Footer />
        <div className="md:hidden">
          <MobileBottomNav type="customer" />
        </div>
      </body>
    </html>
  );
}
