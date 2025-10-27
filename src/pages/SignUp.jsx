import SignUpForm from "../components/SignUpForm";
import { useState } from "react";

export function SignUp() {
  const [signUpInfo, setsignUpInfo] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
    id: "",
    token: ""

  });
  return (
    <div>
      <SignUpForm 
      signUpInfo = {signUpInfo}
      setsignUpInfo = {setsignUpInfo}
      />
    </div>
  );
}

export default SignUp;
