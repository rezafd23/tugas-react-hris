import React, { Component } from 'react';
const $ = require('jquery')
$.Datatable = require('datatables.net')

class TabelPresensi extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    async componentDidMount(){
        await this.setState({
            data: this.props.data
        })
        this.$el = $(this.el)
        this.$el.DataTable(
            {
                data: this.state.data,
                columns: [
                    {title:"Tanggal"},
                    {title:"Nomor Karyawan"},
                    {title:"Nama"},
                    {title:"Jabatan"},
                    {title:"Jam"},
                    {title:"Status"},
                    {title:"Aksi"},
                ],
                info: true,
                lengthChange: false,
                search: false
            }
        )
    }
    render() { 
        return ( 
            <table className="display" width="100%" ref={el => this.el = el}></table>
         );
    }
}
 
export default TabelPresensi;