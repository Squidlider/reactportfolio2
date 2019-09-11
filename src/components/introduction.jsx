import React, { Component } from "react";

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li
                style={{
                  backgroundImage: "url(images/background_filler3.jpg)"
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>
                            Hello! <br />
                            And welcome to my portfolio
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                style={{ backgroundImage: "url(images/background_filler.png)" }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            I make stuff
                            <br /> Games, Illustrations, Logos. You name it!
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                style={{
                  backgroundImage: "url(images/background_filler3.jpg)"
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            Looking for an internship from Helsinki{" "}
                            <span className="icon">
                              <i className="icon-map" />
                            </span>
                          </h1>
                          <h4 className="slider-h4">
                            If you have an offer for me feel free to send me an
                            email!
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
