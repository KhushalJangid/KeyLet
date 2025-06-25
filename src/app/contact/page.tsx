"use client";
import BaseComponent from "@/components/BaseComponent";
// app/contact/page.tsx

import Image from "next/image";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ name: "", phone: "", email: "", message: "" });
      setStatus("Message sent!");
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <BaseComponent>
      <div className="mx-auto p-6 mt-20">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <div className="flex w-full">
          <Image
            src="/images/contact.svg"
            alt="Contact Us"
            width={600}
            height={400}
            className="w-full h-auto mx-6"
          />
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white shadow p-6 rounded-lg mx-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded text-black"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded text-black"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-2 border border-gray-300 rounded text-black"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Send
            </button>
            {status && <p className="text-sm text-gray-700 mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </BaseComponent>
  );
}
