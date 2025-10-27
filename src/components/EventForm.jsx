
import React, { useState } from "react";
import CreateEvent from "../util/CreateEvent";

export function EventForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    latitude: "",
    longitude: "",
    people: "",
    time: ""
  });
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState("");

  function validate(values) {
    const errs = {};
    if (!values.title) errs.title = "Event name is required";
    if (!values.description) errs.description = "Description is required";
    if (!values.date) errs.date = "Date is required";
    if (!values.location) errs.location = "Location is required";
    return errs;
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      try {
        await CreateEvent(form);
        setFeedback("Event created successfully!");
        setForm({
          title: "",
          description: "",
          date: "",
          location: "",
          latitude: "",
          longitude: "",
          people: "",
          time: ""
        });
      } catch (error) {
        setFeedback("Failed to create event.");
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Event name"
        value={form.title}
        onChange={handleChange}
        required
      />
      {errors.title && <div style={{color:"red"}}>{errors.title}</div>}
      <br />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        required
      />
      {errors.description && <div style={{color:"red"}}>{errors.description}</div>}
      <br />
      <input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        required
      />
      {errors.date && <div style={{color:"red"}}>{errors.date}</div>}
      <br />
      <input
        name="location"
        type="text"
        placeholder="Location"
        value={form.location}
        onChange={handleChange}
        required
      />
      {errors.location && <div style={{color:"red"}}>{errors.location}</div>}
      <br />
      <input
        name="latitude"
        type="number"
        placeholder="Latitude"
        value={form.latitude}
        onChange={handleChange}
      />
      <br />
      <input
        name="longitude"
        type="number"
        placeholder="Longitude"
        value={form.longitude}
        onChange={handleChange}
      />
      <br />
      <input
        name="people"
        type="number"
        placeholder="How many people?"
        value={form.people}
        onChange={handleChange}
        min={1}
      />
      <br />
      <input
        name="time"
        type="time"
        value={form.time}
        onChange={handleChange}
      />
      <br />

      <button type="submit">Create Event</button>
      {feedback && <div>{feedback}</div>}
    </form>
  );
}

export default EventForm;
