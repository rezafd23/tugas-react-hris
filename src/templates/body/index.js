import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../../pages";
import { DataKaryawan } from "../../pages";
import {
  AddFormKaryawan,
  DetailFormKaryawan,
  EditFormKaryawan,
} from "../../components";
import "../../assets/css/main.css";
import "../../assets/css/fontawesome-all.min.css";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showPage = () => {
    const { page, status } = this.props;
    return (
      <Switch>
        <Route exact path="/" children={(props) => <Home />} />
        <Route path="/employee" exact component={DataKaryawan} />
        <Route path="/employee/create" exact component={AddFormKaryawan}>
          <AddFormKaryawan addingNewEmployee={this.addEmployee} />
        </Route>
        <Route path="/employee/edit/:id" exact component={EditFormKaryawan} />
        <Route
          path="/employee/details/:id"
          exact
          component={DetailFormKaryawan}
        />
      </Switch>
    );
  };
  render() {
    return (
      <>
        <div id="main">{this.showPage()}</div>
      </>
    );
  }
}
export default Body;
