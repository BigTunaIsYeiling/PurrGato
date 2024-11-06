export default async function GetUsersList(token) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/users`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  return data;
}
