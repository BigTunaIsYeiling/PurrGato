// import { NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';

// export function middleware(req) {
//   const token = req.cookies.get('authToken');
//   const excludedPaths = ['/login', '/register'];
//   const pathname = req.nextUrl.pathname;

//   // Allow requests to the excluded paths
//   if (excludedPaths.includes(pathname)) {
//     return NextResponse.next();
//   }

//   // Redirect to login if no token is found
//   if (!token) {
//     return NextResponse.redirect(new URL('/login', req.url));
//   }

//   // Verify the token
//   try {
//     jwt.verify(token, process.env.JWT_SECRET); // Replace `JWT_SECRET` with your secret key
//     return NextResponse.next(); // Token is valid, allow the request
//   } catch (err) {
//     // If token is expired or invalid, redirect to login
//     return NextResponse.redirect(new URL('/login', req.url));
//   }
// }

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };
