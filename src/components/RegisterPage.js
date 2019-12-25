import React, { Component } from "react";

import { connect } from "react-redux";
import { compose } from "redux";
import { CreateRegister } from "../actions";
import RegisterForm from "./RegisterForm";

class RegisterPage extends Component {
  onSubmit = formValues => {
    this.props.CreateRegister(formValues);
  };
  render() {
    return (
      <div>
        <h1>Please fill the following details</h1>
        <RegisterForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default compose(connect(null, { CreateRegister }))(RegisterPage);
