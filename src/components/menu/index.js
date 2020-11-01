import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='nav-menu' onClick={this.props.goToPage}/>
         );
    }
}
 
export default Menu;