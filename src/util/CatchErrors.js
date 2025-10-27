import showPopup from "./showPopup";

export function CatchErrors(data) {
  // ===rules for forms ===
  const rules = {
    firstName: {
      required: true,
      message: "Please enter your name.",
    },
    email: {
      required: true,
      pattern: /.+@.+\..+/,
      message: "Please enter a valid email address.",
    },
    password: {
      required: true,
      minLength: 5,
      message: "Password must be at least 5 characters long.",
    },
    confirmPassword: {
      required: true,
      matchField: "password",
      message: "Passwords do not match.",
    },
  };

  for (const field in data) {
    const value = data[field];
    const rule = rules[field];

    if (!rule) continue;

    // empty?
    if (rule.required && !value) {
      showPopup(rule.message);
      return false;
    }

    //  email
    if (rule.pattern && !rule.pattern.test(value)) {
      showPopup(rule.message);
      return false;
    }

    // how long?
    if (rule.minLength && value.length < rule.minLength) {
      showPopup(rule.message);
      return false;
    }

    // matching psswords
    if (rule.matchField && value !== data[rule.matchField]) {
      showPopup(rule.message);
      return false;
    }
  }

  // all is ok
  showPopup("Everything is fine!", "success");
  return true;
}
