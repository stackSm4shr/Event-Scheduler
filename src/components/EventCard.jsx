import { Link } from "react-router";

export function EventCard({ event }) {
  console.log("event from EventCard", event);
  return (
    <div className="card border bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{event.title}</h2>
        <p>{event.description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">
            <Link to={`/eventlist/${event.id}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
