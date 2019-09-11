import React, { Component } from "react";

export default class Recentprojects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Projects</span>
                <h2 className="colorlib-heading">Recent Projects</h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 col-sm-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="blog-entry">
                  <a
                    href="https://loska.itch.io/deadmanship"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="blog-img"
                  >
                    <img src="images/cave.png" className="img-responsive" />
                  </a>
                  <div className="desc">
                    <span>
                      <small>April 14, 2018 </small> |{" "}
                      <small> Game Design </small> |{" "}
                      <small>
                        {" "}
                        <i className="icon-bubble3" /> 4
                      </small>
                    </span>
                    <h3>
                      <a href="blog.html">Deadmanship - Student Project</a>
                    </h3>
                    <p>
                      Deadmanship is a side-scrolling multiplayer racing game
                      fit for casual and competitive players alike. In
                      Deadmanship players race against each other in diverse and
                      futuristic tracks full of hazards. Victory is achieved by
                      reaching the goal first but watch out, as the other
                      players are constantly trying to destroy you using the
                      rich selection of weapons and power-ups found in the
                      tracks.{" "}
                      <a
                        href="https://loska.itch.io/deadmanship"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Check it out!
                      </a>
                    </p>
                    <p>
                      Platform: Windows PC<br></br> Engine: Unity3D Tools used:
                      Photoshop, Blender, Illustrator<br></br> Duration: 9
                      Months<br></br> Team Size: 5<br></br> Roles: 3D art, Scrum
                      Master, prop and texture placement, Lightning, Particle
                      effects<br></br> My main role in this project was to be a
                      Scrum Master, but besides that I made 3D art and designing
                      for the project
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="blog-entry">
                  <a
                    href="https://www.youtube.com/watch?v=L57gnMZMYEE"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="blog-img"
                  >
                    <img src="images/bounce.png" className="img-responsive" />
                  </a>
                  <div className="desc">
                    <span>
                      <small>April 14, 2018 </small> |{" "}
                      <small> Game Design and development </small> |{" "}
                      <small>
                        {" "}
                        <i className="icon-bubble3" /> 4
                      </small>
                    </span>
                    <h3>
                      <a href="blog.html">Bouncing Through IMEM</a>
                    </h3>
                    <p>
                      During my time in the Netherlands. I created a game what
                      introduces new students to Breda University of Applied
                      Sciences.
                      <br></br>
                      <a
                        href="https://www.youtube.com/watch?v=L57gnMZMYEE"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Short video showcasing some VFX.
                      </a>
                    </p>
                    <p>
                      3D art, Programming/Scripting, prop and texture placement,
                      Lightning, Particles
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="blog-entry">
                  <a
                    href="https://imgur.com/a/xeRTMxp"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="blog-img"
                  >
                    <img src="images/sparks1.png" className="img-responsive" />
                  </a>
                  <div className="desc">
                    <span>
                      <small>June 28, 2019 </small> |{" "}
                      <small> Rebranding </small> |{" "}
                      <small>
                        {" "}
                        <i className="icon-bubble3" /> 4
                      </small>
                    </span>
                    <h3>
                      <a href="blog.html">Spark's Logo / Posters</a>
                    </h3>
                    <p>New look for sports/music event organizer Spark's.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
