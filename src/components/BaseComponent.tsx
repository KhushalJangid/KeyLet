import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

interface BaseProps {
  children: ReactNode;
}

export default function BaseComponent({ children }: BaseProps) {
  const pathname = usePathname();
  let activeIndex = -1;
  if (pathname === "/") {
    activeIndex = 0;
  }else if (pathname === "/about") {
    activeIndex = 1;
  }else if (pathname === "/services") {
    activeIndex = 2;
  }else if (pathname === "/contact") {
    activeIndex = 3;
  }
  return (
    <div className="flex flex-col justify-center items-center gap-5 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar activeIndex={activeIndex}/>
      {/* <div className="my-auto">{children}</div> */}
      {children}
      <Footer />
    </div>
  );
}
