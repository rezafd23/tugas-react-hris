import React, { Component } from 'react';
import {Thead} from "../"

class TabelCuti extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <table>
            <Thead th={["No", "UserID", "Tanggal Mulai", "Tanggal Berakhir", "Alasan", "Status Pengajuani"]} />
            <tbody>
                {this.props.renderTable}
            </tbody>
        </table> );
    }
}
export default TabelCuti;