import React, { Component } from 'react';
import "./style.css";


class Cuti extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[],
            userSession:[{
                id:1,
                nik: "20201005",
                nama: "homo sapiens",
                jabatan: "Application Owner",
                roleType: 1,
            }],
            userCuti:[{
                userId:1,
                cutiId:1,
                tanggalPengajuan:"12-12-2020",
                tanggalBerakhir:"15-12-2020",
                statusPengajuan:"Menunggu Konfirmasi HRD",
                alasan:"Sakit",
            }]
        }
    }

    // Ambil Data User Dari API
    componentDidMount (){
        fetch('https://my-json-server.typicode.com/dyhancrspo/reactjs-redux-latihan/dataEmployee')
        .then(response => response.json())
        .then(json => {
            this.setState({
                users:json
            })
    })
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

    terimaHRD =()=> {
        console.log("Diterima HRD")
        this.setState({
            statusPengajuan:"Diterima HRD"
        })
        window.alert("Pengajuan Diterima ?")
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
            <div className="tambahCuti">
                <label>Nik Karyawan</label>
                <input type="text" name="title" placeholder="Judul Cuti"></input>
                <label>Nama Karyawan</label>
                <input type="text" name="title" placeholder="Judul Cuti"></input>
                <label>Jabatan</label>
                <input type="text" name="title" placeholder="Judul Cuti"></input>
                <label>Tanggal Awal Pengajuan</label>
                <input type="date" name="title" placeholder="Judul Cuti"></input>
                <label>Tanggal Akhir Pengajuan</label>
                <input type="date" name="title" placeholder="Judul Cuti"></input>
                <label>Alasan Pengajuan</label>
                <input type="area" name="desc" placeholder="Alasan Cuti"></input> 
                <br></br>
                <br></br>
                <button onClick={this.addCuti}>Ajukan Penambahan Cuti/Izin</button>
            </div>
        
            <table className="tableCuti">
                <thead>
                <tr>
                    <th>No</th>
                    <th>Tanggal Mulai</th>
                    <th>Tanggal Berakhir</th>
                    <th>Alasan</th>
                    <th>Status Pengajuan</th>
                    <th>Aksi</th>
                </tr>
                </thead>
            <tbody>
        {
        this.state.userCuti.map((user,idx) =>{
        return      <tr key={idx}>
                    <td>{idx+1}</td> 
                    <td>{user.tanggalPengajuan}</td> 
                    <td>{user.tanggalBerakhir}</td> 
                    <td>{user.alasan}</td> 
                    <td>{user.statusPengajuan}</td> 
                    <td>
                        { user.roleType === 0  ?
                        <>
                        <button onClick={this.editCuti}>Edit</button>
                        <button onClick={this.deleteCuti}>Delete</button>
                        </>
                        :
                        <>
                        <button onClick={this.terimaHRD}>Terima</button>
                        <button onClick={this.tolakHRD}>Tolak</button>
                        </>
                    }
                    </td> 
                    </tr>
                                    }
                            )
        }
        </tbody>
        </table>
        </div>
        </>
                );
    }
}
export default Cuti;