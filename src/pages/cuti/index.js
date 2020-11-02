import React, { Component } from 'react';
import { Button } from '../../component';
import {connect} from "react-redux"
import "./style.css";


class Cuti extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userSession:[{   // Penetapan Login
                id:1,
                nik: "20201005",
                nama: "homo sapiens",
                jabatan: "Application Owner",
                roleType: 1,
            }], 
            dataKaryawan:props.dataKaryawan, //Redux
            userCuti: props.userCuti // Redux
    }
}
    addCuti = ()=> {
    console.log(this.state)
}

    editCuti = () => {
        console.log ("Edit Cuti");
    }

    deleteCuti = () => {
        console.log ("Delete Cuti");
    }

    terimaHRD =(idx)=> {
        console.log("Diterima HRD")
        console.log(idx)
    }

    tolakHRD =()=> {
        console.log("Pengajuan Ditolak")
        this.setState({
            statusPengajuan:"Ditolak HRD"
        })
        window.alert("Pengajuan Ditolak ?")
    }

    render() {
        console.log (this.state)
        return ( 
        <>
            <div className="cuti">
            <h4>Pengajuan Cuti / Izin</h4>
            <table className="tableCuti">
                <thead>
                <tr>
                    <th>No</th>
                    <th>Nama Karyawan</th>
                    <th>Tanggal Mulai</th>
                    <th>Tanggal Berakhir</th>
                    <th>Alasan</th>
                    <th>Status Pengajuan</th>
                    <th>Aksi</th>
                </tr>
                </thead>
            <tbody>
        {
        this.state.userCuti.map((cuti,idx) =>{
        return      <tr key={idx}>
                    <td>{idx+1}</td>
                    <td>{cuti.userNama}</td> 
                    <td>{cuti.tanggalPengajuan}</td> 
                    <td>{cuti.tanggalBerakhir}</td> 
                    <td>{cuti.alasan}</td> 
                    <td>{cuti.statusPengajuan}</td>
                    <td>
                        { cuti.roleType === 0  ?
                        <>
                        <Button onClick={this.editCuti}>Edit</Button>
                        <Button onClick={this.deleteCuti}>Delete</Button>
                        </>
                        :
                        <>
                        <Button onClick={this.terimaHRD}>Terima</Button>
                        <Button onClick={this.tolakHRD}>Tolak</Button>
                        </>
                    }
                    </td> 
                    </tr>
                                })}
        </tbody>
        </table>
        </div>
        </>
                );
    }
}

const mapStateToProps = state => ({
    dataKaryawan: state.cuti.dataKaryawan,
    userCuti: state.cuti.userCuti
})

const mapDispatchToProps = dispatch => ({
    update: data => dispatch({
        type: "Cuti",
        payload: data
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cuti)