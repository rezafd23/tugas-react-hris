import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div id="sidebar">
          <div className="inner">
            <nav id="menu">
              <header className="major">
                <h2>Menu</h2>
              </header>
              <ul>
                <Link to={"/"}>Homepage</Link>
                <Link to={"/employee"}>Employee</Link>
                <Link to={"/payroll"}>Payroll</Link>
                <Link to={"/presensi"}>Presensi</Link>
              </ul>
            </nav>

            <section>
              <header className="major">
                <h2>Ante interdum</h2>
              </header>
              <div className="mini-posts">
                <article>
                  <a href="#" className="image">
                    <img src="../../../public/assets/images/pic07.jpg" alt="" />
                  </a>
                  <p>
                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                    dolore aliquam.
                  </p>
                </article>
                <article>
                  <a href="#" className="image">
                    <img src="../../../public/assets/images/pic08.jpg" alt="" />
                  </a>
                  <p>
                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                    dolore aliquam.
                  </p>
                </article>
                <article>
                  <a href="#" className="image">
                    <img src="../../../public/assets/images/pic09.jpg" alt="" />
                  </a>
                  <p>
                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                    dolore aliquam.
                  </p>
                </article>
              </div>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <header className="major">
                <h2>Get in touch</h2>
              </header>
              <p>
                Sed varius enim lorem ullamcorper dolore aliquam aenean ornare
                velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed
                aliquam facilisis ante interdum. Sed nulla amet lorem feugiat
                tempus aliquam.
              </p>
              <ul className="contact">
                <li className="icon solid fa-envelope">
                  <a href="#">information@untitled.tld</a>
                </li>
                <li className="icon solid fa-phone">(000) 000-0000</li>
                <li className="icon solid fa-home">
                  1234 Somewhere Road #8254
                  <br />
                  Nashville, TN 00000-0000
                </li>
              </ul>
            </section>

            <footer id="footer">
              <p className="copyright">
                &copy; Untitled. All rights reserved. Demo Images:{" "}
                <a href="https://unsplash.com">Unsplash</a>. Design:{" "}
                <a href="https://html5up.net">HTML5 UP</a>.
              </p>
            </footer>
          </div>
        </div>
      </>
    );
  }
}
export default Nav;
