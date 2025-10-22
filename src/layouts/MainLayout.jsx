import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router";

export function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default MainLayout;
