"use client";
import Navbar from "@/components/Navbar";
import Footer from "./Footer";

export default function LayoutClient({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
