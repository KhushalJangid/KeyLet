'use client'


import { Menu } from "@carbon/icons-react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="block w-full border-gray-200 fixed top-0 m-5">
      <div className="mx-5 rounded-lg bg-white max-w-screen-xl flex flex-wrap items-center justify-between px-4 py-3 md:py-0">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
            KeyLet
          </span> */}
          <Image className="h-10" src="/keylet.png" alt="keylet logo" />
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
              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 active"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-gray-900"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-gray-900"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-gray-900"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
