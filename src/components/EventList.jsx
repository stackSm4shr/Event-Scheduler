import { EventCard } from "../components/EventCard";


import { useLoaderData } from "react-router"; 
export function EventList() {
  const {events}= useLoaderData();
  return (
    <div className="flex flex-wrap gap-6 justify-center">
        {events.results.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
    </div>
  );
}

export default EventList;
