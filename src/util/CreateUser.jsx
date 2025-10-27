async function CreateUser({ firstName, email, password }) {
  console.log(" createuser:", firstName, email, password);
  try {
    const res = await fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: firstName,
      }),
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export default CreateUser;
