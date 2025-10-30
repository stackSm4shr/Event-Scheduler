async function SignInUser({ email, password }) {
  try {
    const res = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      }),
    });

    if (!res.ok) {
      throw new Error(`Login failed: ${res.status}`);
    }

  
    const data = await res.json();
    console.log("SignIn data:", data);

    if (data.token) {
      localStorage.setItem("token", data.token);
    }

    return data;

  } catch (error) {
    console.error("SignInUser error:", error);
    throw error;
  }
}

export default SignInUser;