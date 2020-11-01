import React, {Component} from "react";
import CurrencyInput from "react-currency-input";

class InputPayroll extends Component {
    constructor() {
        super();
    }
    render() {
        const {jenis, typeInput, valueInput, placeholderInput} = this.props
        console.log("jenis")
        console.log(jenis)
        if (jenis === "nominal") {
            console.log("nominal")
            return <>
                <CurrencyInput prefix="Rp." thousandSeparator="."/>
            </>
        } else {
            console.log("nominal123")
            return <>
                <input type={typeInput} value={valueInput} placeholder={placeholderInput}/>
            </>
        }
        // return <>
        //     {this.setComponent}
        //     {/*<CurrencyInput prefix="Rp." decimalSeparator="," thousandSeparator="."/>*/}
        // </>

    }
}

export default InputPayroll