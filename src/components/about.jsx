import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row about2">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        <strong>Hi, I'm the guy on the left</strong> and this is
                        my portfolio. I design and build stuff, whether it's
                        Art, web-pages or games. I recently moved to Helsinki to
                        pursue my career in game industry and now I am actively
                        looking for an internship. My main interests are in game
                        development, but I have acquired a wide variety of
                        skills while developing and designing games, so I could
                        say I'm a jack of all trades. I am also interested in
                        all kinds of work possibilities! <p /> May this
                        portfolio website be a proof of my web-development
                        skills. Anything that includes games in any way is my
                        passion. Whether its designing, building or even
                        marketing. Im a business information systems student
                        after all and my studies involve alot about marketing
                        and entrepreneurship.
                        <p /> My main hobbies and interests are: Gaming,
                        Esports, BMX-biking and Orienteering. I have trained
                        finding routes in the woods for almost 20 years, so I
                        could say I'll always find my way. Even if it comes to
                        finding solutions outside of the woods.
                        <p>
                          Recently I got a dog and started photograpy hobby.
                          Check out her{" "}
                          <a
                            href="https://www.instagram.com/freyaussie/"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            Instagram!
                          </a>
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row" />
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Web Development </h3>
                    <p>
                      I have experience building websites using JavaScript,
                      React, HTML & CSS. My main interest is Front-end
                      development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-user" />
                  </span>
                  <div className="desc">
                    <h3>Game design & Development</h3>
                    <p>
                      I Have made few game projects and worked in multiple
                      aspects of a project including marketing, designing and
                      producing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-pencil" />
                  </span>
                  <div className="desc">
                    <h3>Creative</h3>
                    <p>
                      I have always had passion for design work and thats were I
                      excell. Scroll down to see my recent design work.
                    </p>
                  </div>
                </div>
              </div>
              {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
