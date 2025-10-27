export function showPopup(message, type = "error") {
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

export default showPopup;
