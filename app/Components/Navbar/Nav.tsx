"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2"; // Icon hamburger menu
import localFont from "next/font/local";

const Audiowide = localFont({
  src: "../../fonts/Audiowide-Regular.ttf",
});

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // 🔹 State untuk dropdown

  return (
    <nav className={`bg-robotika py-4 px-6 ${Audiowide.className} shadow-custom sticky top-0 z-50`}>
      <div className="flex justify-between items-center mx-auto lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => {
            setMenuOpen(false);
            setDropdownOpen(false);
          }}
        >
          <Image src="/img/robosays.png" alt="logo" width={80} height={80} />
        </Link>

        {/* Hamburger Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white text-2xl fixed top-auto right-4">
          <HiBars3BottomRight />
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex text-white items-center">
          <ul className="flex gap-10 text-sm items-center justify-center">
            <li>
              <Link
                href="/"
                className="relative group"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdownOpen(false);
                }}
              >
                Home
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="relative group"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdownOpen(false);
                }}
              >
                About
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            {/* 🔹 Kompetisi dengan Dropdown */}
            <li className="relative group">
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="relative group focus:outline-none">
                Kompetisi
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg">
                  <li>
                    <Link
                      href="/kompetisi/iot"
                      className="block px-4 py-2 hover:bg-lime-400"
                      onClick={() => {
                        setMenuOpen(false);
                        setDropdownOpen(false);
                      }}
                    >
                      IoT
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/kompetisi/soccer"
                      className="block px-4 py-2 hover:bg-lime-400"
                      onClick={() => {
                        setMenuOpen(false);
                        setDropdownOpen(false);
                      }}
                    >
                      Soccer
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/faq"
                className="relative group"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdownOpen(false);
                }}
              >
                FAQ
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <button className="bg-lime-400 px-4 py-2 rounded-lg text-black font-bold hover:bg-lime-600">Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center bg-robotika text-white mt-4 space-y-3 py-30">
          <Link href="/" onClick={() => setMenuOpen(false)} className="relative group">
            Home
            <span className="block absolute left-0 bottom-0 w-0 h-[2px] bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="relative group">
            About
            <span className="block absolute left-0 bottom-0 w-0 h-[2px] bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* 🔹 Kompetisi di Mobile Menu */}
          <div className="relative w-full text-center">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="relative w-full text-white">
              Kompetisi
            </button>
            {dropdownOpen && (
              <ul className="bg-white text-black rounded-lg shadow-lg w-full mt-2">
                <li>
                  <Link
                    href="/kompetisi/iot"
                    className="block px-4 py-2 hover:bg-lime-400"
                    onClick={() => {
                      setMenuOpen(false);
                      setDropdownOpen(false);
                    }}
                  >
                    IoT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kompetisi/soccer"
                    className="block px-4 py-2 hover:bg-lime-400"
                    onClick={() => {
                      setMenuOpen(false);
                      setDropdownOpen(false);
                    }}
                  >
                    Soccer
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link href="/faq" onClick={() => setMenuOpen(false)} className="relative group">
            FAQ
            <span className="block absolute left-0 bottom-0 w-0 h-[2px] bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <div className="flex flex-col-2 space-x-10">
          <Link href="/login" onClick={() => setMenuOpen(false)}>
            <button className="bg-lime-400 px-9 py-2 rounded-lg text-black font-bold">Login</button>
          </Link>
          <Link href="/login" onClick={() => setMenuOpen(false)}>
            <button className="bg-lime-400 px-7 py-2 rounded-lg text-black font-bold">Register</button>
          </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
