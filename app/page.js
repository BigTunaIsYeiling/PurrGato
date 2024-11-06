import Home from "@/components/HomePage";
import GetUserData from "@/lib/GetUserData";
import { cookies } from "next/headers";
export default async function Page() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token").value;
  const data = GetUserData(token);
  const Users = await data;
  return <Home usersData={Users} />;
}
