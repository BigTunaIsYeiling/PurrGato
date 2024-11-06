import UserProfile from "@/components/user/UserProfile";
import GetUserData from "@/lib/GetUserData";
import { cookies } from "next/headers";

export async function generateMetadata({ params }) {
  const userid = (await params).userid;
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value;
  // Fetch user data to get the username
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/one/${userid}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();

  // If user data is not available, return a default title
  if (!data || !data.username) {
    return { title: "User Not Found" };
  }

  // Set the title based on the username
  return { title: data.username };
}

export default async function Layout({ params, children }) {
  const userid = (await params).userid;
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/one/${userid}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const userData = await GetUserData(token);
  const data = await res.json();
  return (
    <UserProfile userid={userid} data={data} userdata={userData}>
      {children}
    </UserProfile>
  );
}
