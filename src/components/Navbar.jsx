"use client";

import { useState } from "react";
import Link from "next/link";
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
    <nav className="flex justify-between h-max items-center p-4 shadow-md opacity-90 bg-black sticky top-0 z-50">
      {/* Logo and Text linked to homepage */}
      <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={40}
          height={40}
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="#3ab7bf"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
          >
            <path d="M10.143 8.857L7 12l3.143 3.143m3.714-6.286L17 12l-3.143 3.143"></path>
            <rect width={16.5} height={16.5} x={3.75} y={3.75} rx={4}></rect>
          </g>
        </svg>
        <span className="text-lg font-bold text-white">KENZA WEB</span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 text-[1rem] text-white">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`hover:text-shadow-blue-500 transition ${
                pathname === item.href ? "text-blue-500 font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button onClick={toggleMenu} className="md:hidden text-2xl">
        {isOpen ? <FaTimes /> : <FaBars color="white" />}
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
                  className={`hover:text-blue-500 transition block ${
                    pathname === item.href ? "text-blue-500 font-semibold" : ""
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
