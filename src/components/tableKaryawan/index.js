import React, { Component } from "react";

// Import Library BootstrapTable2
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Configure Table from BootstrapTable2
const columns = [
  {
    dataField: "nik",
    text: "NIK",
    sort: true,
    headerStyle: {
      width: "10%",
    },
  },
  {
    dataField: "nama",
    text: "Nama",
  },
  {
    dataField: "jabatan",
    text: "Jabatan",
  },
  {
    dataField: "email",
    text: "Email",
  },
  {
    dataField: "link",
    text: "Action",
    headerStyle: {
      backgroundColor: "#c8e6c9",
      width: "30%",
    },
    formatter: (rowContent, row) => {
      return (
        <div>
          {/* <Link to={"details/"+row.id}> */}
          <Link to={`/employee/details/${row.id}`}>
            <button className="btn btn-info ml-3 ">Detail</button>
          </Link>
          <Link to={`/employee/edit/${row.id}`}>
            <button className="btn btn-warning ml-2 mr-2 ">Edit</button>
          </Link>
          <Link to={`/employee/delete/${row.id}`}>
            <button className="btn btn-danger ">Delete</button>
          </Link>
        </div>
      );
    },
  },
];
// Sort from BootstrapTable2
const defaultSorted = [
  {
    dataField: "nik",
    order: "desc",
  },
];

// Searchbar
const { SearchBar } = Search;

class TableKaryawan extends Component {
  render() {
    return (
      <>
        <div className="container">
          {this.props.listEmployee ? (
            <ToolkitProvider
              bootstrap4
              keyField="id"
              data={this.props.listEmployee}
              columns={columns}
              defaultSorted={defaultSorted}
              search
            >
              {(props) => (
                <div className="mt-5">
                  <div className="add-karyawan float-left">
                    <Link to={"/employee/create"}>
                      <button className="btn btn-primary">Tambah Data</button>
                    </Link>
                  </div>
                  <div className="float-right mb-2">
                    <SearchBar
                      {...props.searchProps}
                      placeholder="Seacrh here"
                    />
                  </div>

                  <BootstrapTable {...props.baseProps} />
                </div>
              )}
            </ToolkitProvider>
          ) : null}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  listEmployee: state.getDataEmployeeList.dataEmployee,
  errorListEmployee: state.getDataEmployeeList.error,
});

export default connect(mapStateToProps)(TableKaryawan);
