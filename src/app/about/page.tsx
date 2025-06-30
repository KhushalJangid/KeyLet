"use client";

import BaseComponent from "@/components/BaseComponent";

export default function About() {
  return (
    <BaseComponent>
      <div className="max-w-3xl mx-auto px-5 py-8 bg-white rounded-lg shadow-md mt-20">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us!</h1>
        <h2 className="text-3xl mt-5">
          Find your perfect investment properties with Keylet!
        </h2>
      </div>
    </BaseComponent>
  );
}
