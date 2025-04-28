"use client";
import Navbar from "@/components/Navbar";

export default function LayoutClient({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
