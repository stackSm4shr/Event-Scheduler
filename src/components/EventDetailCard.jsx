import { useLocation } from "react-router";
import formatTime from "../util/FormatTime";
import formatDate from "../util/FormatDate";

export function EventDetailCard() {
  const location = useLocation();
  const event = location.state;
  console.log("Event from EventDetailCard", event);
  return (
    <div className="card border lg:card-side bg-base-100 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{event.title}</h2>
        <div>
          <p>Date: {formatDate(event.date)}</p>
          <p>Time: {formatTime(event.date)}</p>
        </div>
        <p>{event.description}</p>
      </div>
    </div>
  );
}

export default EventDetailCard;
