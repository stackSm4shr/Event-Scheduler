
import { fetchEvents , fetchEvent } from "../api/index.js";

export async function EventsLoader() {
  const events = await fetchEvents();
  return {events};
}

export async function EventLoader({ params }) {
  const event = await fetchEvent(params.id);
  return {event}
}