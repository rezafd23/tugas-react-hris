import React,{Component} from "react";

class OptionPayroll extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {value,text,onChangeSelect}=this.props
        return <>
            <option onChange={onChangeSelect} value={value}>{text}</option>
        </>
    }
}
export default OptionPayroll