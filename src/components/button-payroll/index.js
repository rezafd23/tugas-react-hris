import React,{Component} from "react"
import '../../assets/css/main.css'
import '../../assets/css/fontawesome-all.min.css'

class ButtonPayroll extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {className,classInput,onClick }=this.props
        return <>
            <div className={className}>
                <input className={classInput} onClick={this.props.onClick} type="button" value={this.props.value} style={{marginBottom:this.props.margBottom}}/>
            </div>
        </>
    }
}
export default ButtonPayroll