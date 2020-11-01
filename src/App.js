import logo from './logo.svg';
// import './App.css';
import './assets/css/main.css'
import './assets/css/fontawesome-all.min.css'
import {Body, Header, Nav} from "./templates"

function App() {
    return (
        // <body className="is-preload">
        <div id="main">
            <div id="wrapper">
                <div className="inner">
                    <Header/>
                    <Body/>
                </div>
                {/*<Nav/>*/}
            </div>
        </div>
        // </body>

    );
}

export default App;
