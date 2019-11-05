import React, { Component } from "react";

import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sign-up">
        <div className="email"></div>
        <div className="password"></div>
      </div>
    );
  }
}

export default SignUp;
