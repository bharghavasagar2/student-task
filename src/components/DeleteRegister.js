import React, { Component } from "react";
import Modal from "./Modal";

import { connect } from "react-redux";
import history from "../history";
import { onDelete } from "../actions";

class DeleteRegister extends Component {
  renderActions = () => {
    return (
      <>
        <button
          onClick={() => this.props.onDelete(this.props.match.params.id)}
          className="ui button negative"
        >
          Delete{" "}
        </button>
        <button
          onClick={() => history.push("/dashboard")}
          className="ui button primary"
        >
          cancel{" "}
        </button>
      </>
    );
  };
  render() {
    const { student } = this.props;
    return (
      <div>
        <Modal
          name={student.name}
          country={student.country}
          actions={this.renderActions()}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    student: state.studentDetails.find(
      detail => detail["Student id"] === ownProps.match.params.id
    )
  };
};
export default connect(mapStateToProps, { onDelete })(DeleteRegister);
