import React, { Component } from 'react';
import Option from "./option"

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="col-12">
                <label>{this.props.label}</label>
                <select name={this.props.name}>
                    {this.props.option.map((data, index) => {
                        return <Option key={index} value={data}/>
                    })}
                </select>
            </div>
         );
    }
}
 
export default Select;