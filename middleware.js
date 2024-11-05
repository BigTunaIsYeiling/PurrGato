import { NextResponse } from "next/server";

export async function middleware(request) {
  console.log("Cookies:", request.cookies.getAll()); // Log all cookies
  const token = request.cookies.get("token");

  if (!token) {
    console.log("no token");
    return NextResponse.redirect(new URL("/register", request.url));
  }

  // Proceed with token verification if token is present
  try {
    const res = await fetch(new URL("/api/verify-token", request.url), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: token.value }),
    });
    const { valid } = await res.json();

    if (valid) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/register", request.url));
    }
  } catch (error) {
    console.error("Error in middleware:", error);
    return NextResponse.redirect(new URL("/register", request.url));
  }
}
