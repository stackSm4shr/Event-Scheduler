import { useState } from "react";
import { CatchEventErrors } from "../util/CatchEventErrors";
import CreateEvent from "../util/CreateEvent";  // <-- default import, NO curly braces

export function EventForm() {
  const initialFormState = {
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    latitude: "",
    longitude: ""
  };

  const [eventInfo, setEventInfo] = useState(initialFormState);

  function handleChange(e) {
    setEventInfo({ ...eventInfo, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = CatchEventErrors(eventInfo);
    if (!isValid) return;
    CreateEvent(eventInfo);
    setEventInfo(initialFormState);
  }

  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-700">Create Event</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="label"><span className="text-base label-text">Event Title</span></label>
            <input
              type="text"
              name="title"
              placeholder="Event Title"
              className="w-full input input-bordered"
              value={eventInfo.title}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="label"><span className="text-base label-text">Description</span></label>
            <textarea
              name="description"
              placeholder="Description"
              className="w-full textarea textarea-bordered"
              value={eventInfo.description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="label"><span className="text-base label-text">Date</span></label>
            <input
              type="date"
              name="date"
              className="w-full input input-bordered"
              value={eventInfo.date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="label"><span className="text-base label-text">Time</span></label>
            <input
              type="time"
              name="time"
              className="w-full input input-bordered"
              value={eventInfo.time}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="label"><span className="text-base label-text">Location</span></label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="w-full input input-bordered"
              value={eventInfo.location}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label"><span className="text-base label-text">Latitude</span></label>
              <input
                type="number"
                name="latitude"
                placeholder="Latitude"
                className="w-full input input-bordered"
                value={eventInfo.latitude}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="label"><span className="text-base label-text">Longitude</span></label>
              <input
                type="number"
                name="longitude"
                placeholder="Longitude"
                className="w-full input input-bordered"
                value={eventInfo.longitude}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button className="btn btn-block">Create Event</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventForm;
