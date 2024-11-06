"use server";

export async function loginAction(username, password) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    }
  );

  if (!response.ok) {
    const data = await response.json();
    return {
      success: false,
      errors: data.errors ? data.errors : "login Failed",
    };
  }
  const data = await response.json();

  return {
    success: true,
    token: data.token,
  };
}

export async function Register(username, password) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
    credentials: "include",
  });
  if (!response.ok) {
    const data = await response.json();
    return {
      success: false,
      errors: data.errors ? data.errors : "Registration Failed",
    };
  }
  const data = await response.json();
  return {
    success: true,
    token: data.token,
  };
}
