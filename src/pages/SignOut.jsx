export function SignOut() {
  localStorage.setItem("token", "no")
  return (
    <div>
      <p>Signed Out</p>
    </div>
  );
}

export default SignOut;