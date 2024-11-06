import GetUserData from "@/lib/GetUserData";
export default async function Page() {
  const data = GetUserData();
  const posts = await data;
  console.log(posts);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
