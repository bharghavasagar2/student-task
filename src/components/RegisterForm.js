import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { validate } from "../validation";

import { compose } from "redux";

class RegisterForm extends Component {
  renderInput = ({ input, meta: { touched, error }, label }) => {
    console.log("error", error);
    return (
      <div className="ui field">
        {label}
        <input {...input} placeholder={label} />
        {touched && error}
      </div>
    );
  };
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <form
          onSubmit={this.props.handleSubmit(value =>
            this.props.onSubmit(value)
          )}
          className="ui form"
        >
          <Field
            type="text"
            name="Student id"
            component={this.renderInput}
            label="Student ID"
          />
          <Field
            type="text"
            name="name"
            component={this.renderInput}
            label="Student Name"
          />
          <Field
            type="text"
            name="email"
            component={this.renderInput}
            label="Email"
          />

          <Field
            type="text"
            name="password"
            component={this.renderInput}
            label="password "
          />
          <Field
            type="text"
            name="confirm password"
            component={this.renderInput}
            label="Confirm password"
          />
          <Field
            type="text"
            name="country"
            component={this.renderInput}
            label="Country"
          />
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default compose(reduxForm({ form: "register form", validate }))(
  RegisterForm
);
