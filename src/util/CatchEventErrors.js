import showPopup from "./showPopup";

export function CatchEventErrors(data) {
  const rules = {
    title: {
      required: true,
      message: "Please enter the event title.",
    },
    description: {
      required: true,
      message: "Please enter a short description.",
    },
    date: {
      required: true,
      pattern: /^\d{4}-\d{2}-\d{2}$/,
      message: "Please select a valid date.",
    },
    time: {
      required: true,
      pattern: /^\d{2}:\d{2}$/,
      message: "Please enter the start time (hh:mm).",
    },
    location: {
      required: true,
      message: "Please provide the event location.",
    },
 
  };

  for (const field in data) {
    const value = data[field];
    const rule = rules[field];

    if (!rule) continue;
    if (rule.required && !value) {
      showPopup(rule.message);
      return false;
    }
    if (rule.pattern && !rule.pattern.test(value)) {
      showPopup(rule.message);
      return false;
    }
    if (rule.minValue !== undefined && Number(value) < rule.minValue) {
      showPopup(rule.message);
      return false;
    }
  }

  showPopup("Event details look good!", "success");
  return true;
}
