import React, { Component } from 'react';
import {Modal} from "react-bootstrap"
import {FormPresensi, Button} from "../"

class Modals extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Modal show={this.props.show} animation={false} backdrop="static">
                <Modal.Header>
                    <h3>Tambah Data Presensi</h3>
                </Modal.Header>
                <Modal.Body>
                    <FormPresensi formValue={this.props.formValue}/>
                </Modal.Body>
                <Modal.Footer>
                    {
                        this.props.formValue.mode === "tambah" ?
                        <Button className="button" onClick={()=>this.props.onClickSimpan()}>Simpan</Button>
                        :
                        <Button className="button" onClick={()=>this.props.onClickEdit()}>Edit</Button>
                    }
                    <Button className="button primary" onClick={this.props.onClick()}>Close</Button>
                </Modal.Footer>
            </Modal>
         );
    }
}
 
export default Modals;