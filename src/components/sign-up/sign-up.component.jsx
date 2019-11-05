import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sign-up">
        <FormInput></FormInput>
      </div>
    );
  }
}
