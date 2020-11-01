import React,{Component} from "react"

class Menu extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <>
            <li>{this.props.children}</li>
        </>
    }
}
export default Menu