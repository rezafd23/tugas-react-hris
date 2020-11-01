import React, { Component } from "react";
import { TableKaryawan } from "../../components";
import { connect } from "react-redux";
import {
  deleteEmployeeDetails,
  getEmployeeList,
} from "../../actions/dataKaryawanAction";

class DataKaryawan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // dataEmployee: [],
    };
  }

  componentDidMount() {
    this.props.dispatch(getEmployeeList());
    this.props.dispatch(deleteEmployeeDetails());
  }

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
