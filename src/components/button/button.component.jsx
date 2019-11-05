import React from "react";

import "./button.styles.scss";

const Button = ({ children, ...otherProps }) => (
  <div className="button" {...otherProps}>
    {children}
  </div>
);

export default Button;
