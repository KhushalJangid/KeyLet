"use client";

import { Menu } from "@carbon/icons-react";
import React, { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  activeIndex: number;
}

export default function Navbar({activeIndex}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log("activeIndex", activeIndex);
  return (
    <nav className="block w-full border-gray-200d fixed top-0 m-5 z-1000">
      <div className="mx-5 rounded-lg bg-white/50 backdrop-blur-md max-w-screen-xl flex flex-wrap items-center justify-between px-4 py-3 md:py-0">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            className="h-10"
            width={160}
            height={40}
            style={{ objectFit: "contain" }}
            src="/images/keylet.png"
            alt="keylet logo"
          />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <Menu />
        </button>
        <div
          className={`${menuOpen ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 my-2 md:flex-row md:space-x-8">
            <li>
              <NavLink href="/" active={activeIndex === 0}>Home</NavLink>
            </li>
            <li>
              <NavLink href="/about" active={activeIndex === 1}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink href="/services" active={activeIndex === 2}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink href="/contact" active={activeIndex === 3}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
interface BaseProps {
  children: ReactNode;
  href: string;
  active?: boolean;
}

function NavLink({ children, href,active }: BaseProps) {
  return (
    <Link
      href={href}
       className={`block pt-2 mb-1 px-3 text-gray-900 border-b-2 hover:border-b-2 hover:border-indigo-600 ${active ? "border-indigo-600" : "border-transparent"}`}
    >
      {children}
    </Link>
  );
}
