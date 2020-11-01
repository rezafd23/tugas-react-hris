import React,{Component} from "react";
import InputPayroll from "../input-payroll";

class RowInputPayroll extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {label,type,value,placeholder,jenis,className}=this.props
        return<>
            <div className={className}>
                {label}
                <InputPayroll jenis={jenis} typeInput={type} valueInput={value} placeholderInput={placeholder}/>
            </div>
        </>
    }
}
export default RowInputPayroll