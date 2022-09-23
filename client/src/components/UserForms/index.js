import React, { useState } from "react";

import { SignIn } from "./SignIn/SignIn";
import { SignUp } from "./SignUp/SignUp";

export const UserForms = ({ closeModal }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  function switchSignType() {
    setIsSignIn((prev) => !prev);
  }
  return isSignIn ? (
    <SignIn closeSignIn={closeModal} switchToSignUp={switchSignType} />
  ) : (
    <SignUp closeSignUp={closeModal} switchToSignIn={switchSignType} />
  );
};
