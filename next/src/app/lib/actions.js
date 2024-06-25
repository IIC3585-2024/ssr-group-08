"use server";

export async function authenticate(_currentState, formData) {
  try {
    await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    if (error) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Credenciales inválidas.";
        default:
          return "Ups, algo salió mal.";
      }
    }
    throw error;
  }
}
