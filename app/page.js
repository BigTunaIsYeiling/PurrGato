import Home from "@/components/HomePage";
import GetUsersList from "@/lib/GetUsersList";
import GetUserData from "@/lib/GetUserData";
import { cookies } from "next/headers";
export default async function Page() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token").value;
  const [Users, userData] = await Promise.all([
    GetUsersList(token),
    GetUserData(token),
  ]);

  return <Home usersData={Users} user={userData} />;
}
