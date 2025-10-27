import { Outlet, Navigate } from "react-router";
import showPopup from "./showPopup.js";

const ProtectedRoutes = () => {
  // const user = null; // Simulate an unauthenticated user
const user =localStorage.getItem("token")
  if (user==="no") {
    showPopup("Please Sign Up first!");
    return <Navigate to="/signup" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
