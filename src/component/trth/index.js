import React, { Component } from 'react';
import {Th} from "../"

class TrTh extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <tr>
                {
                    this.props.th.map((th, index) => <Th key={index}>{th}</Th>)
                }
            </tr>
         );
    }
}
 
export default TrTh;