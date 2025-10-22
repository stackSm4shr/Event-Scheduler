import { Link } from "react-router";

const user = "yes";
// Has to be changed to actual data from login state

export function LoggedIn() {
  return user ? (
    <li>
      <Link to="/createevent">Create Event</Link>
    </li>
  ) : (
    <></>
  );
}

export default LoggedIn;
