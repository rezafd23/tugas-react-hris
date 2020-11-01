import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AddFormKaryawan extends Component {
  render() {
    return (
      <>
        <div className="container">
          <h1>Add Data Form</h1>
          <hr />
          <Link to={"/"}>
            <button className="btn btn-secondary">Back</button>
          </Link>
          <div className=""></div>
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
