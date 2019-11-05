import React from "react";

import "./button.styles.scss";

const Button = ({ children, isGoogleSignIn, ...otherProps }) => (
  <div
    className={`${isGoogleSignIn ? "google-sign-in" : ""} button`}
    {...otherProps}
  >
    {children}
  </div>
);

export default Button;
