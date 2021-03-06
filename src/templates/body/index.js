import React,{Component} from "react"
import {Switch,Route} from "react-router-dom"
import {Home} from "../../pages";
import "../../assets/css/main.css"
import "../../assets/css/fontawesome-all.min.css"

class Body extends Component{
    constructor(props) {
        super(props);
        this.state={}
    }
    showPage = () => {
        const {page,status} = this.props
        return (
            <Switch>
                <Route exact path="/" children={(props) => <Home/>} />
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
export default Body