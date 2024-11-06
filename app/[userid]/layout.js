import UserProfile from "@/components/user/UserProfile";
import GetUserData from "@/lib/GetUserData";
import { cookies } from "next/headers";

export async function generateMetadata({ params }) {
  const userid = (await params).userid;
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/one/${userid}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (!res.ok) return { title: "User Not Found" };

  const data = await res.json();
  return { title: data.username || "User Not Found" };
}

export default async function Layout({ params, children }) {
  const userid = (await params).userid;
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/one/${userid}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const userData = await GetUserData(token);
  const data = res.ok ? await res.json() : null;
  return (
    <UserProfile userid={userid} data={data} userdata={userData}>
      {children}
    </UserProfile>
  );
}
