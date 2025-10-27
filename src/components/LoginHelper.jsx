import { Link } from "react-router";

export function LoginHelper() {
  const loggedin =localStorage.getItem("token")
  if (loggedin==="no") {
    return (
      <>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li>
          <Link to="/signout">Sign Out</Link>
        </li>
      </>
    );
  }
}
