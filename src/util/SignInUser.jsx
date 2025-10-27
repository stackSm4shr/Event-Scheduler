async function SignInUser({ email, password }) {
  console.log(" SignInUser:", email, password);
  try {
    const res = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    console.log("SignInData: ",data);
    // save token to localstoragen here
    localStorage.setItem("token", data.token)
  } catch (error) {
    console.log(error);
  }
}

export default SignInUser;
