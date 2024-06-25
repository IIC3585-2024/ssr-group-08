"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function login(_currentState, formData) {
  const body = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const res = await fetch("http://localhost:3001/login", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    const data = await res.json();
    const sessionData = data.accessToken;
    cookies().set("session", sessionData);
    redirect("/");
  } else {
    redirect("/error");
  }
}

export async function signup(_currentState, formData) {
  const body = {
    first_name: formData.get("first-name"),
    last_name: formData.get("last-name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const res = await fetch("http://localhost:3001/users", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("res", res);
  if (res.ok) {
    redirect("/auth/login");
  } else {
    redirect("/error");
  }
}

export async function logout() {
  cookies().set("session", "");
}

export async function getSessionData() {
  const sessionData = cookies().get("session")?.value;
  return sessionData ? sessionData : null;
}
