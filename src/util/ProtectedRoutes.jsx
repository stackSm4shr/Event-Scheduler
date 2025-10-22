import { Outlet, Navigate } from "react-router";

const ProtectedRoutes = () => {
  const user = null; // Simulate an unauthenticated user

  if (!user) {
    alert("You must be logged in to access this page!");
    return <Navigate to="/signup" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
