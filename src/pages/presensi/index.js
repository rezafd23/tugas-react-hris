import React, { Component } from 'react';
import {connect} from "react-redux"
import "./style.css"
import {Modals, Button, TabelPresensi} from "../../components/presensi_home"
import moment from "moment"

const $ = require('jquery')
$.Datatable = require('datatables.net')

class Presensi extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            modalShow: false,
            jam: "",
            tanggal: "",
            // <-- Data Session Login -->
            nik: "",
            nama: "",
            jabatan: "",
            status: "",
            // <-- ! -->
            statusPresensi: "",
            dataKaryawan: props.dataKaryawan,// get dari redux
            dataPresensi: props.dataPresensi,// get dari redux
            mode: "tambah" // mode untuk tombol simpan di modal
         }
    }
    componentDidMount(){
        this.setDateTime()
        this.setState({
            // set default value untuk form presensi karyawan (data session) / untuk isi otomatis form sesuai data yang login
            nik: "20201005",
            nama: "homo sapiens",
            jabatan: "Application Owner",
            status: "" // status pembeda aksi di tabel
        })
    }

    //Handler modal show/hide
    onClickTambah = () => {
        this.setDateTime() // update datetime state
        const {modalShow} = this.state
        this.setState({
            modalShow: !modalShow,
            mode: "tambah"
        })
    }
    
    // Set datetime saat ini ke state
    setDateTime = () => {
        this.setState({
            tanggal: moment().format("YYYY-MM-DD"),
            jam: moment().format("HH:mm")
        })
    }

    //Handler button simpan
    onClickSimpan = async () => {
        const form = document.formPresensi
        let dataForm = {
            nik: form.nik.value,
            tanggal: form.tanggal.value,
            jam: form.jam.value,
            statusPresensi: form.statusPresensi.value
        }
        let dataBaru = this.state.dataPresensi
        dataBaru.push(dataForm)
        this.setState({
            dataPresensi: dataBaru
        })
        let updateRedux = await this.props.update(dataBaru) // update dataPresensi di Redux
        if(updateRedux){
            alert("Berhasil!")
            this.onClickTambah()
        }else{
            alert("Gagal!")
        }
    }

    //handler klik hapus
    onClickHapus = async (index) => {
        let dataRedux = this.props.dataPresensi
        dataRedux.splice(index, 1)
        let hapus = await this.props.update(dataRedux)
        this.setState({
            dataPresensi: dataRedux
        })
        if(hapus){
            alert("Presensi Berhasil Dihapus")
        }else{
            alert("Gagal Menghapus Presensi")
        }

    }

    //handler klik tombol edit per data di tabel (ambil data di tabel dan tampilkan di form)
    onClickEdit = async (index) =>{
        await this.onClickTambah()
        let form = document.formPresensi
        await this.setState({
            mode: "edit"
        })
        const dataPresensi = this.props.dataPresensi[index]
        let dataKaryawan = this.props.dataKaryawan.filter(data => data.nik === dataPresensi.nik)
        console.log(form);
        form.index.value = index
        form.tanggal.value = dataPresensi.tanggal
        form.jam.value = dataPresensi.jam
        form.nik.value = dataKaryawan[0].nik
        form.nama.value = dataKaryawan[0].nama
        form.jabatan.value = dataKaryawan[0].jabatan
        form.statusPresensi.value = dataPresensi.statusPresensi
    }

    // handler simpan perubahan edit data
    onClickSimpanEdit = async () => {
        const form = document.formPresensi
        let dataForm = {
            nik: form.nik.value,
            tanggal: form.tanggal.value,
            jam: form.jam.value,
            statusPresensi: form.statusPresensi.value
        }
        let dataBaru = this.state.dataPresensi
        await dataBaru.splice(form.index.value, 1, dataForm)
        this.setState({
            dataPresensi: dataBaru
        })
        let updateRedux = await this.props.update(dataBaru) // update dataPresensi di Redux
        if(updateRedux){
            alert("Berhasil!")
            this.onClickTambah()
        }else{
            alert("Gagal!")
        }
    }

    // handler isi tabel (sumber: redux)
    renderTable = (keyword="") => {
        const {dataPresensi, dataKaryawan} = this.props
        let dataFilter = dataPresensi.filter(data=> data.nik.indexOf(keyword)>=0)
        let tr = []
        if(dataFilter){ // cek dataPresensi
            dataFilter.forEach((element,index) => {
                let aksi = 
                            <>
                                <Button className="button small" onClick={() => this.onClickEdit(index)}>Edit</Button>&nbsp;
                                <Button className="button small primary" onClick={() => this.onClickHapus(index)}>Hapus</Button>
                            </>
                let dataCocok = dataKaryawan.filter(data => data.nik === element.nik)
                // console.log(dataCocok);
                tr.push(
                    <tr key={index} >
                        <td>{element.tanggal}</td>
                        <td>{element.nik}</td>
                        <td>{dataCocok[0].nama}</td>
                        <td>{dataCocok[0].jabatan}</td>
                        <td>{element.jam}</td>
                        <td>{element.statusPresensi}</td>
                        <td>{this.state.status==="HR"?aksi:""}</td>
                    </tr>
                )
            });
        }else{
            tr.push(<tr key="0"><td colSpan="7">Tidak Ada Data</td></tr>)
        }
        return tr
    }

    render() { 
        return ( 
            <>
                <div className="inner">
                    <div id="header" style={{marginBottom: 10}}>
                        <h1>Presensi</h1>
                    </div>
                    <div className="table-wrapper">
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                                <button className="button primary icon solid fa-plus-circle" onClick={() => this.onClickTambah()} style={{marginBottom: 15}}>Tambah Presensi</button>
                        </div>
                        <TabelPresensi renderTable={this.renderTable(this.state.status==="HR"?"":this.state.nik)} status={this.state.status}/>
                    </div>
                </div>
                <Modals 
                show={this.state.modalShow} 
                onClick={() => this.onClickTambah} 
                onClickSimpan = {this.onClickSimpan}
                onClickEdit = {this.onClickSimpanEdit}
                formValue={{
                    readOnly : this.state.status==="HR"?false:true,
                    mode: this.state.mode,
                    index: "",
                    tanggal: this.state.tanggal,
                    jam: this.state.jam,
                    nik: this.state.nik,
                    nama: this.state.nama,
                    jabatan: this.state.jabatan
                    }}/>
            </>
         )
    }
}
const mapStateToProps = state => ({
    dataKaryawan: state.presensi.dataKaryawan,
    dataPresensi: state.presensi.presensi
})

const mapDispatchToProps = dispatch => ({
    update: data => dispatch({
        type: "updatePresensi",
        payload: data
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Presensi)