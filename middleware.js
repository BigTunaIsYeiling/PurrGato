import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // const token = request.cookies.get("token");
  // if (!token) {
  //   return NextResponse.redirect("/login");
  // }
  // return NextResponse.next();
  console.log("Excuted");
  return NextResponse.next();
}
export const config = {
  matcher: ["/", "/messages", "/notifications"],
};
