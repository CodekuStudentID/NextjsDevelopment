// Logika: Terima data dari frontend, validasi, cek apakah user sudah ada,
// kalau belum ada -> hash password -> simpan ke database -> balikin response sukses.

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "../../../../../lib/prisma";

export async function POST(req: Request) {
  try {
    // Ambil data dari body request
    const { name, email, password } = await req.json();

    // Validasi input
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Cek apakah user sudah ada di DB
    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ email }, { name }] },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password biar aman (tidak plain text)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan user baru
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    return NextResponse.json(
      { message: "User registered successfully", user },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
