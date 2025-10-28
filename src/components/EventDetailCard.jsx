import { useLoaderData } from "react-router";
import { FormatTime, FormatDate } from "../util";
// use location has to be changed when we use EventLoader
export function EventDetailCard() {
  // const location = useLocation();
  // const event = location.state;
  const { event } = useLoaderData();
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
          <p>Date: {FormatDate(event.date)}</p>
          <p>Time: {FormatTime(event.date)}</p>
        </div>
        <p>{event.description}</p>
      </div>
    </div>
  );
}

export default EventDetailCard;
