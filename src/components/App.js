import React from "react";
import { Router, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import DashBoard from "./DashBoard";
import RegisterPage from "./RegisterPage";
import history from "../history";
import EditRegister from "./EditRegister";
import DeleteRegister from "./DeleteRegister";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <Route path="/" exact component={LandingPage} />
          <Route path="/register" exact component={RegisterPage} />
          <Route path="/dashboard" exact component={DashBoard} />
          <Route path="/register/edit/:id" exact component={EditRegister} />
          <Route path="/register/delete/:id" exact component={DeleteRegister} />
        </Router>
      </div>
    );
  }
}

export default App;
