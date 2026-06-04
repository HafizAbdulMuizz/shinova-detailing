"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md text-white border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="text-3xl font-bold tracking-wider">
          SHI<span className="text-yellow-500">NOVA</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">

          <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
          <li><a href="#services" className="hover:text-yellow-500">Services</a></li>
          <li><a href="#pricing" className="hover:text-yellow-500">Pricing</a></li>
          <li><a href="#gallery" className="hover:text-yellow-500">Gallery</a></li>
          <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>

        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-black border-t border-gray-800">

          <ul className="flex flex-col text-center py-4 gap-4">

            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>

          </ul>

        </div>

      )}

    </nav>
  );
}