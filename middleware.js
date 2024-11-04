import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const cookies = await cookies();
  const token = null;
  if (!token) {
    console.log(cookies);
    return NextResponse.redirect(new URL("/register", request.url));
  }

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
}

export const config = {
  matcher: ["/", "/messages", "/notifications"],
};
