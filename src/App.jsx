import {
  Home,
  SignIn,
  SignUp,
  EventDetail,
  CreateEvent,
  NotFound,
  SignOut,
} from "./pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import MainLayout from "./layouts/MainLayout";
import { ProtectedRoutes } from "./util";
import { ErrorElement, Loading } from "./components";
import { EventLoader, EventsLoader } from "./data"; 

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route
          index
          element={<Home />}
          set loader={EventsLoader}
          errorElement={<ErrorElement />}
          hydrateFallbackElement={<Loading message="initial loading" />}
        />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/signin"
          element={<SignIn />}
          errorElement={<ErrorElement />}
          hydrateFallbackElement={<Loading message="initial loading" />}
        />
        <Route
          path="/signup"
          element={<SignUp />}
          errorElement={<ErrorElement />}
          hydrateFallbackElement={<Loading message="initial loading" />}
        />
        <Route
          path="/signout"
          element={<SignOut />}
          errorElement={<ErrorElement />}
          hydrateFallbackElement={<Loading message="initial loading" />}
        />
        <Route
          path="/eventlist/:id"
          set loader={EventLoader}
          element={<EventDetail />}
          errorElement={<ErrorElement />}
          hydrateFallbackElement={<Loading message="initial loading" />}
        />
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/createevent"
            element={<CreateEvent />}
            errorElement={<ErrorElement />}
            hydrateFallbackElement={<Loading message="initial loading" />}
          />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
