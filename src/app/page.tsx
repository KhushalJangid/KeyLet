// import Image from "next/image";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar/>
      <p className="text-3xl">Keylet.co.in</p>
      <p>We deal in Property buying, selling & rentals.</p>
      <p className="text-4xl">Coming soon!! Stay tuned</p>
      <Footer/>
    </div>
  );
}
