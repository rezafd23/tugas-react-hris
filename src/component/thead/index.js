import React, { Component } from 'react';
import {TrTh} from "../"

class Thead extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <thead>
                <TrTh th={this.props.th}/>
            </thead>
        );
    }
}

export default Thead;