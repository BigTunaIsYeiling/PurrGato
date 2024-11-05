import { NextResponse } from "next/server";

export async function middleware(request) {
  // Access cookies directly from headers to avoid Edge Runtime issues
  const cookieHeader = request.headers.get("cookie");
  const token = cookieHeader
    ? cookieHeader
        .split(";")
        .find((cookie) => cookie.trim().startsWith("token="))
        ?.split("=")[1]
    : null;

  if (!token) {
    console.log("No token found");
    return NextResponse.redirect(new URL("/register", request.url));
  }

  // Define the base URL to ensure /api/verify-token resolves correctly
  const baseURL = request.nextUrl.origin;
  let res, valid;

  try {
    res = await fetch(`${baseURL}/api/verify-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    if (!res.ok) {
      throw new Error("Failed to verify token");
    }

    // Check if the response is valid
    ({ valid } = await res.json());
  } catch (error) {
    console.error("Middleware token verification failed:", error);
    return NextResponse.redirect(new URL("/register", request.url));
  }

  // Redirect or allow access based on token validity
  if (valid) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/register", request.url));
  }
}

// Define the paths for which the middleware should run
export const config = {
  matcher: ["/", "/messages", "/notifications"],
};
