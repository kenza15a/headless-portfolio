"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and Close icons
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Accueil", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
      {/* Logo and Text linked to homepage */}
      <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
        <Image
          src="/images/logo.png"
          alt="KENZA web Logo"
          width={40}
          height={40}
          className="object-contain"
          priority
        />
        <span className="text-lg font-bold text-gray-800">KENZA WEB</span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 text-sm">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`hover:text-blue-600 transition ${
                pathname === item.href ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button onClick={toggleMenu} className="md:hidden text-2xl">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 right-4 bg-white shadow-lg rounded-md p-4 flex flex-col gap-4 text-sm md:hidden"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={`hover:text-blue-600 transition block ${
                    pathname === item.href ? "text-blue-600 font-semibold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
