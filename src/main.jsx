import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./layouts/MainLayout.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home, SignIn, SignUp, EventDetail, CreateEvent } from "./pages";
import ProtectedRoutes from "./util/ProtectedRoutes.jsx";
import { eventLoader } from "./data/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/eventlist/:id" element={<EventDetail />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/createevent" element={<CreateEvent />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
