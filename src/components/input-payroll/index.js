import React, {Component} from "react";
import CurrencyInput from "react-currency-input";

class InputPayroll extends Component {
    constructor() {
        super();
    }
    render() {
        const {jenis, typeInput, valueInput, placeholderInput,onChange,readOnly} = this.props
        if (jenis === "nominal") {
            console.log("nominal")
            return <>
                <CurrencyInput value={valueInput} onChange={onChange} prefix="Rp." decimalSeparator="," thousandSeparator="."/>
            </>
        } else {
            console.log("nominal123")
            return <>
                <input type={typeInput} value={valueInput} readOnly={readOnly} onChange={onChange} placeholder={placeholderInput}/>
            </>
        }
    }
}

export default InputPayroll