import React, { ReactNode } from "react";

interface BaseProps {
  children: ReactNode;
  onClick?: (e:any) => void;
}

export default function ElevatedButton({ children, onClick }: BaseProps) {
  return (
    // <button
    //   className="relative inline-block font-medium group py-1.5 px-2.5 "
    //   onClick={onClick}
    // >
    //   <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-indigo-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
    //   <span className="absolute inset-0 w-full h-full bg-white border border-indigo-600 group-hover:bg-indigo-50"></span>
    //   <span className="relative text-indigo-600 ">{children}</span>
    // </button>
    <button
      className="relative inline-block font-medium group py-1.5 px-2.5 "
      onClick={onClick}
    >
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border border-black group-hover:bg-white"></span>
      <span className="relative text-black flex">{children}</span>
    </button>
  );
}
