export function EventDetailCard() {
  return (
    <div className="card border lg:card-side bg-base-100 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">"title": "Event Title"</h2>
        <p>"description": "Some Description for the Event"</p>
      </div>
    </div>
  );
}

export default EventDetailCard;
