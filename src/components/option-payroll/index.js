import React,{Component} from "react";

class OptionPayroll extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {value,text}=this.props
        return <>
            <option value={value}>{text}</option>
        </>
    }
}
export default OptionPayroll