import { useState } from "react";
import { CatchErrors } from "../util/CatchErrors";
import {showPopup} from "../util/showPopup";
import {SignInUser} from "../util/SignInUser";
import { Navigate } from "react-router";


export function SignInForm() {
  const [signInInfo, setSignInInfo] = useState({
    email: "",
    password: "",
  });
  

  function handleChange(e) {
    setSignInInfo({
      ...signInInfo,
      [e.target.name]: e.target.value,
    });
  }

  // Handle form submit
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const data = await SignInUser(signInInfo); 

      if (data && data.token) {
        localStorage.setItem("token", data.token);
        showPopup("Welcome!", "success");
        setSignInInfo({ email: "", password: "" });
        Navigate("/home");
      } else {
        showPopup("Email or password is incorrect", "error");
      }

    } catch (error) {
      CatchErrors(error.message || "Network error");
      showPopup("Something went wrong. Please try again.", "error");
      console.error("Login error:", error);
    }
  }

  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
          Sign In
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email Address"
              className="w-full input input-bordered"
              value={signInInfo.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered"
              value={signInInfo.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="btn btn-block">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
