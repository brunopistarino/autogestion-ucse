import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Sidebar from "@components/Sidebar";

export const metadata = {
  title: "Autogestión UCSE",
  description: "Autogestión UCSE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex min-h-screen bg-white text-black">
          <Sidebar />
          <main className="flex flex-col gap-8 pt-8 pb-12 w-full max-w-7xl mx-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
