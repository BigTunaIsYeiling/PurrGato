import UserProfile from "@/components/user/UserProfile";

export async function generateMetadata({ params }) {
  const userid = (await params).userid;

  // Fetch user data to get the username
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/one/${userid}`
  );
  const data = await res.json();

  // If user data is not available, return a default title
  if (!data || !data.username) {
    return { title: "User Not Found" };
  }

  // Set the title based on the username
  return { title: data.username };
}

export default function Layouy({ params, children }) {
  return <UserProfile children={children} params={params} />;
}
