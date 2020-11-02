import React, {Component} from "react"
import {ButtonPayroll, RowInputPayroll, SelectPayroll, OptionPayroll} from "../../components";
import {connect} from "react-redux"

class Payroll extends Component {
    constructor(props) {
        super(props);
        const {dataUser} = this.props
        this.state = {
            amount: "0.00",
            name: "",
            jabatan: "",
            nik: "",
            pokok: 0,
            ahli: 0,
            jab: 0,
            ksh: 0,
            tk: 0,
            pph: 0,
            pensiun: 0,
            thp: 0,
            payroll:[]
        }

    }

    onChangeNominal = (e, maskedvalue) => {
        const {ahli, jab} = this.state
        let tk2 = 0.02 * (maskedvalue + ahli + jab)
        let pensiun2 = 0.01 * (maskedvalue + ahli + jab)
        let ksh2 = 0.01 * (maskedvalue + ahli + jab)
        let pph2 = 0.05 * (maskedvalue)
        let thp2=maskedvalue+ahli+jab-tk2-pensiun2-ksh2-pph2
        this.setState({
            pokok:maskedvalue,
            tk:tk2,
            pensiun:pensiun2,
            ksh:ksh2,
            pph:pph2,
            thp:thp2
        })

        // this.setState({
        //     pokok:maskedvalue,
        //     tk:0.02*(maskedvalue+ahli+jab),
        //     pensiun:0.01*(maskedvalue+ahli+jab),
        //     ksh:0.01*(maskedvalue+ahli+jab),
        //     pph:0.05*(maskedvalue),
        // })

    }
    onChangeNominal2 = (e, maskedvalue) => {
        const {pokok, jab,pph} = this.state
        let tk2 = 0.02 * (maskedvalue + pokok + jab)
        let pensiun2 = 0.01 * (maskedvalue + pokok + jab)
        let ksh2 = 0.01 * (maskedvalue + pokok + jab)
        let thp2=maskedvalue+pokok+jab-tk2-pensiun2-ksh2-pph
        this.setState({
            ahli:maskedvalue,
            tk:tk2,
            pensiun:pensiun2,
            ksh:ksh2,
            thp:thp2
        })
    }
    onChangeNominal3 = (e, maskedvalue) => {
        const {pokok, ahli,pph} = this.state
        let tk2 = 0.02 * (maskedvalue + pokok + ahli)
        let pensiun2 = 0.01 * (maskedvalue + pokok + ahli)
        let ksh2 = 0.01 * (maskedvalue + pokok + ahli)
        let thp2=maskedvalue+pokok+ahli-tk2-pensiun2-ksh2-pph
        this.setState({
            jab:maskedvalue,
            tk:tk2,
            pensiun:pensiun2,
            ksh:ksh2,
            thp:thp2
        })
    }

    getInitialState() {
        return ({amount: "0.00"});
    }

    handleChange = (event, maskedvalue, floatvalue) => {
        this.setState({amount: maskedvalue});
    }

     onChangeSelect = (e) => {
        const {dataUser} = this.props
        // this.setState({
        //     nik:e.target.value
        // })
        // console.log("Cek Select")
        // console.log(this.state.nik)
        if (e.target.value === "-- Pilih Data Karyawan --") {
            this.setState({
                [e.target.name]: "",
                name: ""
            })
        } else {
            dataUser.find((val) => {
                if (val.nik === e.target.value) {
                    this.setState({
                        [e.target.name]: e.target.value,
                        name: val.nama,
                        jabatan: val.jabatan
                    })
                }
            })
            console.log("ada")
        }
        console.log("Cek Select")
        console.log(e.target.value)
    }

    tambahData=()=>{
        const {nik,pokok,jab,ahli}=this.state
        let data={
            nik:nik,
            pokok:pokok,
            jab:jab,
            ahli:ahli,
            status:"Diajukan"
        }
        let temp=[]
        temp.push(data)
        console.log(temp)
        this.props.addPayroll(temp)
    }

    render() {
        const {dataUser} = this.props
        // let temp={
        //     nik:"-- Pilih Data Karyawan --"
        // }
        // dataUser.splice(0,0,temp)
        return <>
            <div className="inner">
                {/*<section>*/}
                {/*    <header className="major">*/}
                {/*        <h2>Data Payroll Pegawai</h2>*/}
                {/*    </header>*/}
                {/*    <ButtonPayroll value="Tambah Data" margBottom="20px"/>*/}
                {/*    /!*<input className="button primary" value="Add"/>*!/*/}
                {/*    /!*<ul className="actions">*!/*/}
                {/*    /!*    <a href="#" className="button primary">Primary</a>*!/*/}
                {/*    <div>*/}
                {/*        <table>*/}
                {/*            <thead>*/}
                {/*            <tr>*/}
                {/*                <th>No</th>*/}
                {/*                <th>Nama</th>*/}
                {/*                <th>Jabatan</th>*/}
                {/*                <th>Action</th>*/}
                {/*            </tr>*/}
                {/*            </thead>*/}
                {/*            <tbody>*/}
                {/*            <td>1</td>*/}
                {/*            <td>Reza</td>*/}
                {/*            <td>CEO</td>*/}
                {/*            <td>*/}
                {/*                /!*<a className="button primary" >Add</a>*!/*/}
                {/*                /!*<a className="button primary" >Edit</a>*!/*/}
                {/*            </td>*/}
                {/*            </tbody>*/}
                {/*        </table>*/}
                {/*    </div>*/}
                {/*</section>*/}

                <section>
                    {/*<div>*/}
                    <form>
                        <h3>Data Payroll Karyawan</h3>
                        <div className="row gtr-uniform">
                            <SelectPayroll value={this.state.nik} onChange={this.onChangeSelect} text="Nomor Karyawan"
                                           className="col-6 col-12-xsmall"
                                           name="nik">
                                {dataUser.map((val, index) => {
                                    return (
                                        <OptionPayroll key={val.nik} value={val.nik} text={val.nik}/>
                                    )
                                })}
                            </SelectPayroll>

                            <RowInputPayroll jenis="non" className="col-6 col-12-xsmall" type="text" placeholder="Nama"
                                             label="Nama" readOnly={true} value={this.state.name}/>
                            <RowInputPayroll jenis="non" className="col-6 col-12-xsmall" type="text"
                                             placeholder="Jabatan"
                                             label="Jabatan" readOnly={true} value={this.state.jabatan}/>
                            <RowInputPayroll onChange={this.onChangeNominal} value={this.state.pokok} type="text"
                                             jenis="nominal" className="col-6 col-12-xsmall" label="Gaji Pokok"/>
                            <RowInputPayroll onChange={this.onChangeNominal3} value={this.state.jab} type="text"
                                             jenis="nominal" className="col-12" label="Tunjangan Jabatan"/>
                            <RowInputPayroll onChange={this.onChangeNominal2} value={this.state.ahli} type="text"
                                             jenis="nominal" className="col-12" label="Tunjangan Keahlian"/>
                            <RowInputPayroll value={this.state.ksh} jenis="nominal" className="col-6 col-12-xsmall"
                                             label="BPJS Kesehatan"/>
                            <RowInputPayroll value={this.state.tk} jenis="nominal" className="col-6 col-12-xsmall"
                                             label="BPJS Tenaga Kerja"/>
                            <RowInputPayroll value={this.state.pensiun} jenis="nominal" className="col-6 col-12-xsmall"
                                             label="BPJS Pensiun"/>
                            <RowInputPayroll value={this.state.pph} jenis="nominal" className="col-6 col-12-xsmall "
                                             label="Pajak Penghasilan (PPh)"/>
                            <RowInputPayroll value={this.state.thp} jenis="nominal" className="col-12" label="Take Home Pay "/>
                            <ButtonPayroll onClick={this.tambahData} className="col-12" classInput="button primary fit" value="Tambah Data"
                                           margBottom="20px"/>
                        </div>
                    </form>
                    {/*</div>*/}
                </section>



            </div>
        </>
    }
}

const mapStateToProps = (state) => ({
    dataUser: state.process.dataUser,
    dataPayroll: state.process.dataPayroll,
})
const mapDispatchToProps=(dispatch)=>({
    addPayroll:(payroll)=>dispatch({
        type:"addPayrollData",
        payload: {dataPayroll:payroll}}
    )
})

export default connect(mapStateToProps,mapDispatchToProps)(Payroll)