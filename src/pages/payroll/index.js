import React, {Component} from "react"
import {ButtonPayroll, RowInputPayroll, SelectPayroll, OptionPayroll} from "../../components";
import {Button, Modal} from "react-bootstrap";
import CurrencyInput from 'react-currency-input';

class Payroll extends Component {
    constructor(props) {
        super(props);
        this.state={
            amount:"0.00"
        }

    }

    render() {
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
                        <form method="post" action="#">
                            <h3>Data Payroll Karyawan</h3>
                            <div className="row gtr-uniform">
                                <SelectPayroll text="Nomor Karyawan" className="col-6 col-12-xsmall"
                                               name="selectGender">
                                    <OptionPayroll value="-" text="- Pilih Karyawan -"/>
                                </SelectPayroll>
                                {/*<RowInputPayroll className="col-6 col-12-xsmall" label="Gaji Pokok"/>*/}
                                <RowInputPayroll jenis="non" className="col-6 col-12-xsmall" type="text" placeholder="Nama"
                                                 label="Nama"/>
                                <RowInputPayroll jenis="non" className="col-6 col-12-xsmall" type="text" placeholder="Jabatan"
                                                 label="Jabatan"/>
                                <RowInputPayroll jenis="nominal" className="col-6 col-12-xsmall" label="Gaji Pokok"/>
                                <RowInputPayroll jenis="nominal" className="col-12" label="Tunjangan Jabatan"/>
                                <RowInputPayroll jenis="nominal" className="col-12" label="Tunjangan Keahlian"/>
                                <RowInputPayroll jenis="nominal" className="col-6 col-12-xsmall" label="BPJS Kesehatan"/>
                                <RowInputPayroll jenis="nominal" className="col-6 col-12-xsmall" label="BPJS Tenaga Kerja"/>
                                <RowInputPayroll jenis="nominal" className="col-6 col-12-xsmall" label="BPJS Pensiun"/>
                                <RowInputPayroll jenis="nominal" className="col-6 col-12-xsmall " label="Pajak Penghasilan (PPh)"/>
                                <RowInputPayroll jenis="nominal" className="col-12" label="Take Home Pay "/>
                                <ButtonPayroll className="col-12" classInput="button primary fit" value="Tambah Data" margBottom="20px"/>
                            </div>
                        </form>
                    {/*</div>*/}
                </section>
                <section>
                    <header className="major">
                        <h2>Ipsum sed dolor</h2>
                    </header>
                    <div className="posts">
                        <article>
                            <a href="#" className="image"><img src="../../assets/images/pic01.jpg" alt=""/></a>
                            <h3>Interdum aenean</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="#" className="image"><img src="../../assets/images/pic02.jpg" alt=""/></a>
                            <h3>Nulla amet dolore</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="#" className="image"><img src="../../assets/images/pic03.jpg" alt=""/></a>
                            <h3>Tempus ullamcorper</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="#" className="image"><img src="../../assets/images/pic04.jpg" alt=""/></a>
                            <h3>Sed etiam facilis</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="#" className="image"><img src="../../assets/images/pic05.jpg" alt=""/></a>
                            <h3>Feugiat lorem aenean</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="#" className="image"><img src="../../assets/images/pic06.jpg" alt=""/></a>
                            <h3>Amet varius aliquam</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </article>
                    </div>
                </section>
            </div>
        </>
    }
}

export default Payroll;
