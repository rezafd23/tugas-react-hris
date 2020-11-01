import React, { Component } from "react";
import { TableKaryawan } from "../components";
import { connect } from "react-redux";
import {
  deleteEmployeeDetails,
  getEmployeeList,
} from "../actions/dataKaryawanAction";

class DataKaryawan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(getEmployeeList());
    this.props.dispatch(deleteEmployeeDetails());
  }

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  tambahKaryawan = (obj) => {
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
        <TableKaryawan />
        {/* <TableKaryawan dataKaryawan={this.state.dataEmployee} /> */}
      </>
    );
  }
}

export default connect()(DataKaryawan);
