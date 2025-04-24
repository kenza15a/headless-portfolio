import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Portfolio Développeuse Web",
  description: "Découvrez mon univers de développement web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        <main >{children}</main>
      </body>
    </html>
  );
}
