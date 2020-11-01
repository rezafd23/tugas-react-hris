import React, { Component } from "react";
// import { DataKaryawan } from "./pages";
// import {
//   AddFormKaryawan,
//   DetailFormKaryawan,
//   EditFormKaryawan,
// } from "./components";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Body, Nav } from "./templates";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataEmployee: [],
    };
  }

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  addEmployee = (obj) => {
    const {
      nik,
      jabatan,
      noktp,
      nama,
      email,
      password,
      tglLahir,
      tempatLahir,
      alamat,
      noTelp,
      pendidikanTerkahir,
      institusiPendidikan,
      statusPernikahan,
    } = obj;
    let oldDataEmployee = this.state.dataEmployee;
    oldDataEmployee.push({
      nik,
      jabatan,
      noktp,
      nama,
      email,
      password,
      tglLahir,
      tempatLahir,
      alamat,
      noTelp,
      pendidikanTerkahir,
      institusiPendidikan,
      statusPernikahan,
    });
    this.setState({
      dataEmployee: oldDataEmployee,
    });
  };

  render() {
    return (
      <>
        <div id="wrapper">
          <Body />
          <Nav />
        </div>
      </>
    );
  }
}

export default App;
