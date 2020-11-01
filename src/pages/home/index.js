import React, {Component} from "react"
import "../../assets/css/main.css"
import "../../assets/css/fontawesome-all.min.css"
import mainImage from "../../assets/images/pic10.jpg"

class Home extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return <>
            <div className="inner">
                <header id="header">
                    <a href="index.html" className="logo"><strong>Editorial</strong> by HTML5 UP</a>
                    <ul className="icons">
                        <li><a href="#twitter" className="icon brands fa-twitter"><span className="label">Twitter</span></a>
                        </li>
                        <li><a href="#facebook" className="icon brands fa-facebook-f"><span
                            className="label">Facebook</span></a></li>
                        <li><a href="#snapchat" className="icon brands fa-snapchat-ghost"><span
                            className="label">Snapchat</span></a></li>
                        <li><a href="#instagram" className="icon brands fa-instagram"><span
                            className="label">Instagram</span></a></li>
                        <li><a href="#instagram" className="icon brands fa-medium-m"><span className="label">Medium</span></a>
                        </li>
                    </ul>
                </header>

                <section id="banner">
                    <div className="content">
                        <header>
                            <h1>Hi, I’m Editorial<br/>
                                by HTML5 UP</h1>
                            <p>A free and fully responsive site template</p>
                        </header>
                        <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante
                            interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet
                            egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
                            Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
                        <ul className="actions">
                            <li><a href="#learnmore" className="button big">Learn More</a></li>
                        </ul>
                    </div>
                    <span className="image object">
                        <img src={mainImage} alt=""/>
                    </span>
                </section>

                <section>
                    <header className="major">
                        <h2>Erat lacinia</h2>
                    </header>
                    <div className="features">
                        <article>
                            <span className="icon fa-gem"></span>
                            <div className="content">
                                <h3>Portitor ullamcorper</h3>
                                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                    facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            </div>
                        </article>
                        <article>
                            <span className="icon solid fa-paper-plane"></span>
                            <div className="content">
                                <h3>Sapien veroeros</h3>
                                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                    facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            </div>
                        </article>
                        <article>
                            <span className="icon solid fa-rocket"></span>
                            <div className="content">
                                <h3>Quam lorem ipsum</h3>
                                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                    facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            </div>
                        </article>
                        <article>
                            <span className="icon solid fa-signal"></span>
                            <div className="content">
                                <h3>Sed magna finibus</h3>
                                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                    facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            </div>
                        </article>
                    </div>
                </section>

                <section>
                    <header className="major">
                        <h2>Ipsum sed dolor</h2>
                    </header>
                    <div className="posts">
                        <article>
                            <a href="#article" className="image"><img src="../../assets/images/pic01.jpg" alt=""/></a>
                            <h3>Interdum aenean</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul className="actions">
                                <li><a href="#more" className="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="#article" className="image"><img src="../../assets/images/pic02.jpg" alt=""/></a>
                            <h3>Nulla amet dolore</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul className="actions">
                                <li><a href="m#more" className="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="#article" className="image"><img src="../../assets/images/pic03.jpg" alt=""/></a>
                            <h3>Tempus ullamcorper</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul className="actions">
                                <li><a href="#more" className="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="#article" className="image"><img src="../../assets/images/pic04.jpg" alt=""/></a>
                            <h3>Sed etiam facilis</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul className="actions">
                                <li><a href="#more" className="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="#article" className="image"><img src="../../assets/images/pic05.jpg" alt=""/></a>
                            <h3>Feugiat lorem aenean</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul className="actions">
                                <li><a href="#more" className="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="#article" className="image"><img src="../../assets/images/pic06.jpg" alt=""/></a>
                            <h3>Amet varius aliquam</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul className="actions">
                                <li><a href="#more" className="button">More</a></li>
                            </ul>
                        </article>
                    </div>
                </section>
            </div>
        </>
    }
}

export default Home