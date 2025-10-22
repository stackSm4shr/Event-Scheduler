async function CreateUser({ email, password, name }) {
  //must be changed
  try {
    const res = await fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export default CreateUser;
