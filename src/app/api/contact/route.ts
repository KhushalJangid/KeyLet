// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, phone, email, message } = await request.json();

  if (!name || !phone || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // You can now handle the data (e.g., save to DB, send email, etc.)
  console.log("Contact Form:", { name, phone, email, message });

  return NextResponse.json({ success: true });
}
