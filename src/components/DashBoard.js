import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class DashBoard extends Component {
  renderDetails = () => {
    return this.props.students.map(student => {
      return (
        <div key={student["Student id"]} className="ui cards">
          <div className="card">
            <div className="content">
              <img className="right floated mini ui image" alt="" />
              <div className="header">{student.name}</div>
              <div className="meta">{student["Student id"]}</div>
              <div className="description">{student.email}</div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <Link
                  to={`/register/edit/${student["Student id"]}`}
                  className="ui basic green button"
                >
                  Edit
                </Link>
                <button className="ui basic red button">Delete</button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <p>welcome to the dashboard</p>
        <div style={{ textAlign: "right" }}>
          <Link className="ui button" to="/register">
            New Register
          </Link>
        </div>
        {this.renderDetails()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    students: state.studentDetails
  };
};

export default connect(mapStateToProps)(DashBoard);
