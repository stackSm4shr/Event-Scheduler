import { useState } from "react";

async function CreateUser({ firstName, email, password }) {
  try {
    const res = await fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        email,
        password,
      }),
    });

    
    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`);
    }

    const data = await res.json();
    console.log("User created:", data); 
    return data; 

  } catch (error) {
    console.error("CreateUser error:", error);
    throw error; 
  }
}

export default CreateUser;