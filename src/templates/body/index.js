import React,{Component} from "react"
import {Switch,Route} from "react-router-dom"
import {Home, Payroll} from "../../pages";
import "../../assets/css/main.css"
import "../../assets/css/fontawesome-all.min.css"
import {connect} from "react-redux"

class Body extends Component{
    constructor(props) {
        super(props);
        this.state={}
    }

    async componentDidMount() {
        let temp=[]
        // temp.splice(0,0,temp2)
        await fetch('https://my-json-server.typicode.com/dyhancrspo/reactjs-redux-latihan/dataEmployee')
                .then(response => response.json())
                .then(json => {
                    temp = json
                    let temp2={
                        nik:"-- Pilih Data Karyawan --"
                    }
                    temp.splice(0,0,temp2)
                    this.props.addData(temp)
                })
        // console.log(temp)
    }

    showPage = () => {
        const {page,status} = this.props
        return (
            <Switch>
                <Route exact path="/" children={(props) => <Home/>} />
                <Route exact path="/payroll" children={(props) => <Payroll/>} />
            </Switch>
        )
    }
    render() {
        return <>
            <div id="main">
                {this.showPage()}
            </div>
        </>
    }

}

const mapStateToProps=(state)=>({
    dataUser:state.process.dataUser
})

const mapDispatchToProps=(dispatch)=>({
    addData:(user)=>dispatch({
        type:"fetchData",
        payload: {dataUser:user}}
    )
})

export default connect(mapStateToProps,mapDispatchToProps) (Body)
// export default Body