import React, { Component } from 'react';
import {Input} from "../"

class LabelInput extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="col-12">
                <label>{this.props.label}</label>
                <Input type={this.props.type} name={this.props.name} value={this.props.value} readOnly={this.props.readOnly} onChangeNik={this.props.onChangeNik}/>
            </div>
         );
    }
}
 
export default LabelInput;