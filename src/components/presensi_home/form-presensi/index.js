import React, { Component } from 'react';
import { connect } from 'react-redux';
import {LabelInput, Select} from "../"
import Input from '../input';

class FormPresensi extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    onChangeNik = async (e) => {
        const {dataKaryawan} = this.props
        let dataBaru = await dataKaryawan.filter(data => data.nik.toString().indexOf(e.target.value)>=0)
        if(dataBaru.length==1){
            let form = document.formPresensi
            form.nama.value= dataBaru[0].nama
            form.jabatan.value= dataBaru[0].jabatan
        }
    }
    render() {
        const {tanggal, jam, nik, nama, jabatan, index, readOnly} = this.props.formValue
        return ( 
            <form name="formPresensi">
                <Input type="hidden" name="index" value={index}/>
                <LabelInput label="Tanggal" type="date" name="tanggal" value={tanggal} readOnly={readOnly} />
                <LabelInput label="Jam" type="text" name="jam" value={jam} readOnly={readOnly} />
                <LabelInput label="NIK" type="text" name="nik" value={nik} readOnly={readOnly} onChangeNik={this.onChangeNik} />
                <LabelInput label="Nama Lengkap" type="text" name="nama" value={nama} readOnly={true} />
                <LabelInput label="Jabatan" type="text" name="jabatan" value={jabatan} readOnly={true} />
                <Select name="statusPresensi" label="Status Presensi" option={["", "Masuk", "Pulang"]} />
            </form>
         );
    }
}

const mapStateToProps = state => ({
    dataKaryawan : state.presensi.dataKaryawan
})
export default connect(mapStateToProps)(FormPresensi);