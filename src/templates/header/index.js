import React,{Component} from "react"

class Header extends Component{
    constructor(props) {
        super(props);
        this.state={}
    }
    render() {
        return <>
            {/*<head>*/}
                <title>Editorial by HTML5 UP</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
                <link rel="stylesheet" href="../../../public/assets/css/main.css"/>
            {/*</head>*/}
        </>
    }
}
export default Header