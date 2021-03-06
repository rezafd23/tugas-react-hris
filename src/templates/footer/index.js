import React,{Component} from "react"

class Footer extends Component{
    constructor(props) {
        super(props);
        this.state={}
    }
    render() {
        return <>
            <section>
                <header className="major">
                    <h2>Get in touch</h2>
                </header>
                <p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem
                    ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus
                    aliquam.</p>
                <ul className="contact">
                    <li className="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
                    <li className="icon solid fa-phone">(000) 000-0000</li>
                    <li className="icon solid fa-home">1234 Somewhere Road #8254<br/>
                        Nashville, TN 00000-0000
                    </li>
                </ul>
            </section>

            <footer id="footer">
                <p className="copyright">&copy; Untitled. All rights reserved. Demo Images: <a
                    href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
            </footer>
        </>
    }
}
export default Footer