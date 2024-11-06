"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function setToken(token) {
  const cookieStore = await cookies();
  cookieStore.set("token", token, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60,
    secure: true,
    sameSite: "none",
  });
  return redirect("/");
}
