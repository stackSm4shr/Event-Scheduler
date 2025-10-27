async function CreateEvent(eventData) {
  try {
    const res = await fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(eventData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default CreateEvent;
