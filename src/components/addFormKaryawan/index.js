import React, { Component } from "react";
import { Link } from "react-router-dom";
import { RowInput, InputField } from "../../components";

export default class AddFormKaryawan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataEmployee: [],
      nik: "",
      jabatan: "",
      nama: "",
      noktp: "",
      email: "",
      password: "",
      tglLahir: "",
      tempatLahir: "",
      alamat: "",
      notelp: "",
      pendidikanTerkahir: "",
      institusiPendidikan: "",
      statusPernikahan: "",
      roleType: "",
    };
  }

  //   Fungsi get Input Data
  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.value);
  };

  //  Fungsi Tambah Data
  onAddEmployee = () => {
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
      notelp,
      pendidikanTerkahir,
      institusiPendidikan,
      statusPernikahan,
      roleType,
    } = this.state;
    this.props.addingNewEmployee({
      nik,
      jabatan,
      noktp,
      nama,
      email,
      password,
      tglLahir,
      tempatLahir,
      alamat,
      notelp,
      pendidikanTerkahir,
      institusiPendidikan,
      statusPernikahan,
      roleType,
    });
    alert(`Yeay!! Tambah Data, ${nama}  berhasil!`);

    // Log
    console.log("Sukses Tambah Data : ", nama, "/", nik, "=>", password);
  };

  render() {
    return (
      <>
        <div className="container">
          <h1>Add Data Form</h1>
          <hr />
          <Link to={"/"}>
            <button className="btn btn-secondary">Back</button>
          </Link>
          <div className="container m-5">
            <div className="form-group row">
              <div className="">
                <RowInput
                  value={this.state.nik}
                  label="NIK"
                  type="text"
                  name="nik"
                  onChange={this.onChangeInput}
                />
                <RowInput
                  value={this.state.jabatan}
                  label="Jabatan"
                  type="text"
                  name="jabatan"
                  onChange={this.onChangeInput}
                />
                <RowInput
                  value={this.state.nama}
                  label="Nama"
                  type="text"
                  name="nama"
                  onChange={this.onChangeInput}
                />
                <RowInput
                  value={this.state.noktp}
                  label="No KTP"
                  type="text"
                  name="noktp"
                  onChange={this.onChangeInput}
                />
                <RowInput
                  value={this.state.email}
                  label="E-Mail"
                  type="email"
                  name="email"
                  onChange={this.onChangeInput}
                />
                <RowInput
                  value={this.state.password}
                  label="Password"
                  type="password"
                  name="password"
                  onChange={this.onChangeInput}
                />
                <RowInput
                  value={this.state.tglLahir}
                  label="Tanggal Lahir"
                  type="date"
                  name="tglLahir"
                  onChange={this.onChangeInput}
                />
                <RowInput
                  value={this.state.tempatLahir}
                  label="Tempat Lahir"
                  type="text"
                  name="tempatLahir"
                  onChange={this.onChangeInput}
                />
                <RowInput
                  value={this.state.alamat}
                  label="Alamat"
                  type="text"
                  name="alamat"
                  onChange={this.onChangeInput}
                />
                <RowInput
                  value={this.state.notelp}
                  label="Telepon"
                  type="text"
                  name="notelp"
                  onChange={this.onChangeInput}
                />
                <RowInput
                  value={this.state.pendidikanTerkahir}
                  label="Pendidikan Terkahir"
                  type="text"
                  name="pendidikanTerkahir"
                  onChange={this.onChangeInput}
                />
                <RowInput
                  value={this.state.institusiPendidikan}
                  label="Institusi Pendidikan"
                  type="text"
                  name="institusiPendidikan"
                  onChange={this.onChangeInput}
                />
                <RowInput
                  value={this.state.statusPernikahan}
                  label="status Pernikahan"
                  type="text"
                  name="statusPernikahan"
                  onChange={this.onChangeInput}
                />
                <RowInput
                  value={this.state.roleType}
                  label="Role Type"
                  type="number"
                  name="roleType"
                  onChange={this.onChangeInput}
                />
                <InputField
                  typeInput="button"
                  valueInput="Tambah Data"
                  onClickInput={this.onAddEmployee}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

// id,
//       nik,
//       jabatan,
//       noktp,
//       nama,
//       email,
//       password,
//       tglLahir,
//       tempatLahir,
//       alamat,
//       noTelp,
//       pendidikanTerkahir,
//       institusiPendidikan,
//       statusPernikahan,
