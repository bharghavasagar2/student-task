import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { editRegister } from "../actions";
import RegisterForm from "./RegisterForm";

class EditRegister extends Component {
  onSubmit = values => {
    this.props.editRegister(this.props.match.params.id, values);
  };
  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <h1> hello welcome edit here</h1>
        <RegisterForm
          initialValues={_.pick(
            this.props.student,
            "name",
            "Student id",
            "country",
            "email",
            "password"
          )}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("state", state);
  return {
    student: state.studentDetails.find(
      detail => detail["Student id"] === ownProps.match.params.id
    )
  };
};

export default connect(mapStateToProps, { editRegister })(EditRegister);
