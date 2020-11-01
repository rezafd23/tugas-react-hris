import React, { Component } from 'react';
import {Thead} from "../"
const $ = require('jquery')
$.Datatable = require('datatables.net')

class TabelPresensi extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <table>
                <Thead th={["Tanggal", "NIK", "Nama Karyawan", "Jabatan", "Jam", "Status Presensi", this.props.status==="HR"?"Aksi":""]} />
                <tbody>
                    {this.props.renderTable}
                </tbody>
            </table>
         );
    }
}
 
export default TabelPresensi;