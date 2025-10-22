import { Outlet, Navigate } from "react-router";

const ProtectedRoutes = () => {
  const user = null; // Simulate an unauthenticated user
  return user ? <Outlet /> : <Navigate to="/signup" />; // Redirect to login if not authenticated
};

export default ProtectedRoutes;
