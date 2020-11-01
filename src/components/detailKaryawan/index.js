import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getEmployeeDetails } from "../../actions/dataKaryawanAction";

class DetailFormKaryawan extends Component {
  componentDidMount() {
    this.props.dispatch(getEmployeeDetails(this.props.match.params.id));
  }

  render() {
    console.log();
    return (
      <>
        <div className="container">
          <h1>Detail Karyawan {this.props.match.params.id}</h1>
          <hr />
          <Link to={"/"}>
            <button className="btn btn-secondary">Back</button>
          </Link>

          <table className="table table-striped mt-4">
            <thead></thead>
            <tbody>
              <tr>
                <th width="200" scope="row">
                  NIK
                </th>
                <td width="10">:</td>
                <td>{this.props.detailsDataEmployee.nik}</td>
              </tr>
              <tr>
                <th width="200" scope="row">
                  Nama
                </th>
                <td width="10">:</td>
                <td>{this.props.detailsDataEmployee.nama}</td>
              </tr>
              <tr>
                <th width="200" scope="row">
                  Jabatan
                </th>
                <td width="10">:</td>
                <td>{this.props.detailsDataEmployee.jabatan}</td>
              </tr>
              <tr>
                <th width="200" scope="row">
                  No KTP
                </th>
                <td width="10">:</td>
                <td>{this.props.detailsDataEmployee.noktp}</td>
              </tr>
              <tr>
                <th width="200" scope="row">
                  eEmail
                </th>
                <td width="10">:</td>
                <td>{this.props.detailsDataEmployee.email}</td>
              </tr>
              <tr>
                <th width="200" scope="row">
                  Tempat / Tanggal Lahir
                </th>
                <td width="10">:</td>
                <td>
                  {this.props.detailsDataEmployee.tempatLahir},{" "}
                  {this.props.detailsDataEmployee.tglLahir}
                </td>
              </tr>
              <tr>
                <th width="200" scope="row">
                  Alamat
                </th>
                <td width="10">:</td>
                <td>{this.props.detailsDataEmployee.alamat}</td>
              </tr>
              <tr>
                <th width="200" scope="row">
                  Telepon
                </th>
                <td width="10">:</td>
                <td>{this.props.detailsDataEmployee.notelp}</td>
              </tr>
              <tr>
                <th width="200" scope="row">
                  Pendidikan Terkahir
                </th>
                <td width="10">:</td>
                <td>{this.props.detailsDataEmployee.pendidikanTerkahir}</td>
              </tr>
              <tr>
                <th width="200" scope="row">
                  Institusi Pendidikan Terkahir
                </th>
                <td width="10">:</td>
                <td>{this.props.detailsDataEmployee.institusiPendidikan}</td>
              </tr>
              <tr>
                <th width="200" scope="row">
                  Institusi Pendidikan Terkahir
                </th>
                <td width="10">:</td>
                <td>{this.props.detailsDataEmployee.institusiPendidikan}</td>
              </tr>
              <tr>
                <th width="200" scope="row">
                  Status Pernikahan
                </th>
                <td width="10">:</td>
                <td>{this.props.detailsDataEmployee.statusPernikahan}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  detailsDataEmployee: state.getDataEmployeeList.detailsDataEmployee,
  errorDetailsEmployee: state.getDataEmployeeList.errorDetailsEmployee,
});

export default connect(mapStateToProps)(DetailFormKaryawan);
