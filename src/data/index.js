export async function eventLoader() {
  const res = await fetch("http://localhost:3001/api/events");
  const event = await res.json();
  return event;
}
