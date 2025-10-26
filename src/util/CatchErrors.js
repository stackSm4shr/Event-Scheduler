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


function showPopup(message, type = "error") {
  const existing = document.querySelector(".error-popup");
  if (existing) existing.remove();

  const popup = document.createElement("div");
  popup.className = "error-popup";
  popup.textContent =
    type === "error" ? `Error: ${message}` : `Success: ${message}`;

  Object.assign(popup.style, {
    position: "fixed",
    top: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: type === "error" ? "#d32f2f" : "#2e7d32",
    color: "#fff",
    padding: "16px 24px",
    borderRadius: "8px",
    fontFamily: "Arial, sans-serif",
    fontSize: "15px",
    zIndex: "9999",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    opacity: "0",
    transition: "opacity 0.3s ease",
    textAlign: "center",
  });

  document.body.appendChild(popup);

  requestAnimationFrame(() => {
    popup.style.opacity = "1";
  });

  setTimeout(() => {
    popup.style.opacity = "0";
    setTimeout(() => popup.remove(), 300);
  }, 3000);
}
