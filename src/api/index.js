<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
// fetch functions go here
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes


export async function fetchEvents() {
  const response = await fetch('http://localhost:3001/api/events');
  if (!response.ok) {
    throw new Error('Failed to fetch events');
  }
  return response.json();
}

export async function fetchEvent(id) {
  const response = await fetch(`http://localhost:3001/api/events/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch event');
  }
  return response.json();
<<<<<<< Updated upstream
<<<<<<< Updated upstream
}
>>>>>>> Stashed changes
=======
}
>>>>>>> Stashed changes
=======
}
>>>>>>> Stashed changes
