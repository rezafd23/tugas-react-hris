import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EditFormKaryawan extends Component {
  render() {
    return (
      <>
        <div className="container">
          <h1>Edit Form</h1>
          <hr />
          <Link to={"/"}>
            <button className="btn btn-secondary">Back</button>
          </Link>
        </div>
      </>
    );
  }
}
