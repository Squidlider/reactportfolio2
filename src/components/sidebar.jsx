import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/about.jpg)" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">
                  Aleksi <br /> Koskiaho
                </a>
              </h1>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li>
                    <a href="#timeline" data-nav-section="timeline">
                      Timeline
                    </a>
                  </li>
                  <li>
                    <a href="#skills" data-nav-section="skills">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#word" data-nav-section="work">
                      Work / Projects
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="footer2" role="navigation">
              <Link to="/pricing">
                {" "}
                <a href="#home" data-nav-section="home">
                  Logo Pricing
                </a>
              </Link>
            </div>

            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/aleksi.koskiaho"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-facebook2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/SquidLider"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/koksmahok/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/aleksi-koskiaho-6bb07a105/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-linkedin2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://steamcommunity.com/id/Squidlider"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-steam" />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
                Tools:
                <br />
                Bootstrap <br /> React <br />
                Colorlib template
                <br />
                <br /> @Aleksi Koskiaho 2019
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
