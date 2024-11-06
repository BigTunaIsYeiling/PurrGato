export default async function GetUserData() {
  const response = await fetch("https://purrgatto.up.railway.app/user/users", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}
