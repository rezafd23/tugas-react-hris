import React, {Component} from "react";

class SelectPayroll extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, text,className} = this.props
        return <>
            <div className={className}>
                {text}
                <select name={name}>
                    {this.props.children}
                </select>
            </div>
        </>
    }
}

export default SelectPayroll