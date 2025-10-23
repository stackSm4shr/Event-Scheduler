// fetch functions go here


export async function fetchEvents() {
  const response = await fetch('http://localhost:3001/api/events');
  if (!response.ok) {
    throw new Error('Failed to fetch events');
  }
  return response.json();
}