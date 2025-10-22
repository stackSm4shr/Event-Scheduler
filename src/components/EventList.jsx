import { EventCard } from "../components/EventCard";

//const event has to be changed to actual data from api
const events = {"totalCount":5,"totalPages":1,"currentPage":1,"hasNextPage":false,"hasPreviousPage":false,"results":[{"id":1,"title":"Summer Festival","description":"A fun summer festival with music and food","date":"2025-10-21T14:51:29.568Z","location":"Central Park","latitude":40.785091,"longitude":-73.968285,"organizerId":1,"createdAt":"2025-10-21T14:51:29.632Z","updatedAt":"2025-10-21T14:51:29.632Z"},{"id":2,"title":"Tech Conference","description":"A conference about the latest in tech","date":"2025-10-21T14:51:29.568Z","location":"Convention Center","latitude":37.774929,"longitude":-122.419418,"organizerId":2,"createdAt":"2025-10-21T14:51:29.632Z","updatedAt":"2025-10-21T14:51:29.632Z"},{"id":3,"title":"Oktoberfest","description":"A traditional German beer festival held annually in Munich.","date":"2024-09-21T00:00:00.000Z","location":"Theresienwiese, Munich","latitude":48.131271,"longitude":11.549669,"organizerId":1,"createdAt":"2025-10-21T14:51:29.632Z","updatedAt":"2025-10-21T14:51:29.632Z"},{"id":4,"title":"Berlin Marathon","description":"One of the world’s largest and most popular marathons held annually in Berlin.","date":"2024-09-29T00:00:00.000Z","location":"Brandenburg Gate, Berlin","latitude":52.516275,"longitude":13.377704,"organizerId":3,"createdAt":"2025-10-21T14:51:29.632Z","updatedAt":"2025-10-21T14:51:29.632Z"},{"id":5,"title":"Christmas Market","description":"A traditional German Christmas market held in the heart of Berlin.","date":"2024-12-01T00:00:00.000Z","location":"Alexanderplatz, Berlin","latitude":52.521918,"longitude":13.413215,"organizerId":3,"createdAt":"2025-10-21T14:51:29.632Z","updatedAt":"2025-10-21T14:51:29.632Z"}]}

export function EventList() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
        {events.results.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
    </div>
  );
}

export default EventList;
