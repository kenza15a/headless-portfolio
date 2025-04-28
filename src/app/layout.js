import "./globals.css";
import LayoutClient from "@/components/LayoutClient";

export const metadata = {
  title: "Portfolio Développeuse Web",
  description: "Découvrez mon univers de développement web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-800">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
