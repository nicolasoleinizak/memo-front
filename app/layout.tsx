import type { Metadata } from "next";
import { Andika } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu";

const andika = Andika({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "MemoTest",
  description: "A game to learn and have fun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-[100%] margin-0">
      <body className={`${andika.className} h-[100%] margin-0`}>
        <Menu className="fixed top-0 left-0 z-50"/>
        <div className="flex flex-column justify-center align-center w-full h-[100%] p-6 pt-20 bg-gradient-to-r from-secondary-200 to-secondary-100">
          <div className="w-full p-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
