import React, { useState } from 'react';

import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

export const SignForms = ({ closeModal }) => {
  const [isSignIn, setIsSignIn] = useState(false);

  function switchSignType() {
    setIsSignIn((prev) => !prev);
  }
  return isSignIn ? (
    <SignIn closeSignIn={closeModal} switchToSignUp={switchSignType} />
  ) : (
    <SignUp closeSignUp={closeModal} switchToSignIn={switchSignType} />
  );
};
