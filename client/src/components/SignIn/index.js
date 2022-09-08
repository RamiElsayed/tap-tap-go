import React, { useState } from "react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function SignForm(props) {
  const [isSignIn, setIsSignIn] = useState(true);

  function switchSignType() {
    setIsSignIn((prev) => !prev);
  }
  return isSignIn ? (
    <SignIn closeSignIn={props.closeForm} switchToSignUp={switchSignType} />
  ) : (
    <SignUp closeSignUp={props.closeForm} switchToSignIn={switchSignType} />
  );
}
