import Link from "next/link";
import React, { ReactNode } from "react";

interface BaseProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export default function ElevatedButtonLink({ children, href,className }: BaseProps) {
  return (
    // <button
    //   className="relative inline-block font-medium group py-1.5 px-2.5 "
    //   onClick={onClick}
    // >
    //   <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-indigo-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
    //   <span className="absolute inset-0 w-full h-full bg-white border border-indigo-600 group-hover:bg-indigo-50"></span>
    //   <span className="relative text-indigo-600 ">{children}</span>
    // </button>
    <Link
      className={`relative inline-block font-medium group py-1.5 px-2.5 ${className}`}
      href={href || "#"}
    >
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border border-black group-hover:bg-white"></span>
      <span className="relative text-black flex">{children}</span>
    </Link>
  );
}
