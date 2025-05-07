import "./globals.css";
import LayoutClient from "@/components/LayoutClient";
import { Inter } from "next/font/google";
export const metadata = {
  title: "Portfolio Développeuse Web",
  description: "Découvrez mon univers de développement web.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="bg-gray-50 text-gray-800 font-sans">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
