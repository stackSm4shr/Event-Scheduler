// import fetch functions here and export loader



export async function getEvents() {
  const response = await fetch('http://localhost:3001/api/events');
  if (!response.ok) throw new Error("Failed to fetch events");
  const eventList = await response.json();
  return { eventList };
}

