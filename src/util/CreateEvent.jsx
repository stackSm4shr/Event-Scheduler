export async function CreateEvent({title,description,date,location,longitude,latitude}) {
  try { 
    const res = await fetch("http://localhost:3001/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
     body: JSON.stringify({
        title: title,
        description: description,
        date: date,
        location: location,
        latitude: latitude,
        longitude: longitude,
      }),
    });
    return await res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default CreateEvent; 