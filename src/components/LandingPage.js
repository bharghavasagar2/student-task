import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import { validate } from "../validation";

class LandingPage extends Component {
  renderInput = ({ input, meta: { touched, error }, label }) => {
    console.log("props", input);
    return (
      <div className={touched && error ? "ui field error" : "ui field"}>
        {label}
        <input {...input} />
        {touched && error}
      </div>
    );
  };

  render() {
    return (
      <div>
        welcome
        <form
          className="ui form "
          onSubmit={this.props.handleSubmit(value =>
            this.props.history.push("/dashboard")
          )}
        >
          <Field
            type="email"
            name="email"
            component={this.renderInput}
            label="Email"
          />
          <Field
            type="password"
            name="password"
            component={this.renderInput}
            label="password"
          />
          <button className="ui button primary" type="submit">
            submit
          </button>
          <Link to="/register">Register</Link>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: "signin", validate })(LandingPage);
