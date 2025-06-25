import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export interface BaseProps {
  children: ReactNode;
}

export default function BaseComponent({ children }: BaseProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-5 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      {/* <div className="my-auto">{children}</div> */}
      {children}
      <Footer />
    </div>
  );
}
