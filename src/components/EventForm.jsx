import { CreateEvent } from "../util";

export function EventForm() {
  const eventInfo = [];

  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
          Create Event
        </h1>
        <form className="space-y-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Enter Title"
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Descritpion</span>
            </label>
            <input
              type="text"
              placeholder="Enter Descritpion"
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Date</span>
            </label>
            <input
              type="date"
              placeholder="Enter Date"
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Time</span>
            </label>
            <input
              type="time"
              placeholder="Enter Time"
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Location</span>
            </label>
            <input
              type="text"
              placeholder="Enter Location"
              className="w-full input input-bordered"
            />
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
