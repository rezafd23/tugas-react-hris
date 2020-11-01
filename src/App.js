import React, { Component } from "react";
import DataKaryawan from "./pages/dataKaryawan";
import {
  AddFormKaryawan,
  DetailFormKaryawan,
  EditFormKaryawan,
} from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Route path="/" exact component={DataKaryawan} />
          <Route path="/create" exact component={AddFormKaryawan} />
          <Route path="/edit/:id" exact component={EditFormKaryawan} />
          <Route path="/details/:id" exact component={DetailFormKaryawan} />
        </Router>
      </>
    );
  }
}

export default App;
