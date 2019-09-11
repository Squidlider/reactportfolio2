import React, { Component } from "react";

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };

    this.toggleDiv = this.toggleDiv.bind(this);
  }

  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    return (
      <section className="colorlib-work" data-section="work">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">My Work</span>
              <h2 className="colorlib-heading animate-box">Recent Work</h2>
            </div>
          </div>
          <div
            className="row row-bottom-padded-sm animate-box"
            data-animate-effect="fadeInLeft"
          />
          <div className="row">
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div
                className="project"
                style={{ backgroundImage: "url(images/sminoi.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a
                        href="https://imgur.com/a/MEV4GOa"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Streamer Logo
                      </a>
                    </h3>
                    <span>Made with Adobe Illustrator</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div
                className="project"
                style={{ backgroundImage: "url(images/puppywalker.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a
                        href="https://imgur.com/a/fDTv4l3"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Dog walking App UI design
                      </a>
                    </h3>
                    <span>Made with Adobe XD</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInTop"
            >
              <div
                className="project"
                style={{ backgroundImage: "url(images/Squidlider_logo.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a
                        href="https://imgur.com/a/MEV4GOa"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Streamer Logo
                      </a>
                    </h3>
                    <span>Made with Adobe Illustrator</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInBottom"
            >
              <div
                className="project"
                style={{ backgroundImage: "url(images/tikrulogo.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a
                        href="https://imgur.com/a/MEV4GOa"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Streamer Logo
                      </a>
                    </h3>
                    <span>Made with Adobe Illustrator</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div
                className="project"
                style={{ backgroundImage: "url(images/ricardosports.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a
                        href="https://imgur.com/a/MEV4GOa"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Sports logo
                      </a>
                    </h3>
                    <span>Made with Adobe Illustrator</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div
                className="project"
                style={{ backgroundImage: "url(images/2ndjune_tausta.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a
                        href="https://imgur.com/6JkazBZ"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Logo for sailing boat
                      </a>
                    </h3>
                    <span>Made with Adobe Illustrator</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div
                className="project"
                style={{ backgroundImage: "url(images/xbox-01.jpg)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a
                        href="https://imgur.com/PUgUQzR"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Illustrated XBOX one Controller
                      </a>
                    </h3>
                    <span>Made with Adobe Illustrator</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div
                className="project"
                style={{ backgroundImage: "url(images/sparks1.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a
                        href="https://imgur.com/T1vUkIT"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Sports & Music event organizer
                      </a>
                    </h3>
                    <span>Made with Adobe Illustrator</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className="col-md-12 animate-box"
                data-animate-effect="fadeInRight"
              >
                {this.state.show && <Box />}
              </div>
            </div>
          </div>
          <div
            className="App-intro col-md-12 animate-box"
            data-animate-effect="fadeInRight"
          >
            <button className="more-button" onClick={this.toggleDiv}>
              Show more
            </button>
          </div>
        </div>
      </section>
    );
  }
}

class Box extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <div
            className="project"
            style={{ backgroundImage: "url(images/ollymoss.png)" }}
          >
            <div className="desc">
              <div className="con">
                <h3>
                  <a
                    href="https://imgur.com/PUgUQzR"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Olly Moss inspired Dota posters
                  </a>
                </h3>
                <span>Made with Adobe Illustrator</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 animate-boxs">
          <div
            className="project"
            style={{ backgroundImage: "url(images/ogre.jpg)" }}
          >
            <div className="desc">
              <div className="con">
                <h3>
                  <a
                    href="https://imgur.com/PUgUQzR"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Dota Ogre Magi fanart
                  </a>
                </h3>
                <span>Made with Adobe Illustrator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
