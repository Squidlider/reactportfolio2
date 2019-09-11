import React, { Component } from "react";
import Popup from "reactjs-popup";

export default class Skills extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-skills" data-section="skills">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta"></span>
                <h2 className="colorlib-heading animate-box">My Skills</h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <p>
                  <i>
                    "I’m a great team player who isn’t afraid of challenges and
                    I have a passion in excelling at new technologies as needed.
                    Being detail oriented, enthusiastic about what I do and not
                    giving up are few of my many strengths. My colleagues have
                    described me as a friendly, hard-working, problem solving
                    individual who is great at working with different
                    personalities. During my life I have learned to work as a
                    leader as well as a subordinate"
                  </i>
                </p>
              </div>{" "}
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <p>
                  While these bars might not be the best way to showcase my
                  skills, they will give you some insight. Hover over to see
                  some extra information and see trough the rest of the
                  portfolio!
                  <br></br> <br></br> <br></br> <br></br>
                </p>
              </div>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="progress-wrap">
                  <Popup
                    trigger={
                      <div className="hovertool">
                        <h3>Photoshop / Illustrator</h3>
                      </div>
                    }
                    className="reacttooltip"
                    position="top center"
                    on="hover"
                    arrow={false}
                    offsetY="5"
                  >
                    Im capable of creating Logos, Posters, website mockups and
                    image manipulations.
                  </Popup>
                  <div className="progress">
                    <div
                      className="progress-bar color-1"
                      role="progressbar"
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "85%" }}
                    >
                      <span>85%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="progress-wrap">
                  <Popup
                    trigger={
                      <div className="hovertool">
                        <h3>Javascript</h3>
                      </div>
                    }
                    className="reacttooltip"
                    position="top center"
                    on="hover"
                    arrow={false}
                    offsetY="5"
                  >
                    Id say Im advanced programmer, but im more into designing
                    stuff. So the javascript experience I have is mostly gained
                    through front-end development.
                  </Popup>
                  <div className="progress">
                    <div
                      className="progress-bar color-2"
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "60%" }}
                    >
                      <span>60%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="progress-wrap">
                  <Popup
                    trigger={
                      <div className="hovertool">
                        <h3>HTML5 / CSS3</h3>
                      </div>
                    }
                    position="top center"
                    on="hover"
                    arrow={false}
                    offsetY="5"
                    className="foo-content"
                  >
                    {" "}
                    <div>
                      These are day-today practices. There isn't anything a
                      little googling wont solve.{" "}
                    </div>
                  </Popup>
                  <div className="progress">
                    <div
                      className="progress-bar color-3"
                      role="progressbar"
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "95%" }}
                    >
                      <span>85%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="progress-wrap">
                  <Popup
                    trigger={
                      <div className="hovertool">
                        <h3>Microsoft Office</h3>
                      </div>
                    }
                    position="top center"
                    on="hover"
                    arrow={false}
                    offsetY="5"
                    className="foo-content"
                  >
                    {" "}
                    <div>Proficient with Excel, Word and Powerpoint </div>
                  </Popup>
                  <div className="progress">
                    <div
                      className="progress-bar color-4"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "90%" }}
                    >
                      <span>90%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="progress-wrap">
                  <Popup
                    trigger={
                      <div className="hovertool">
                        <h3>Wordpress</h3>
                      </div>
                    }
                    position="top center"
                    on="hover"
                    arrow={false}
                    offsetY="5"
                    className="foo-content"
                  >
                    {" "}
                    <div>
                      I have created multiple webpages using wordpress with
                      custom styling and multiple add-ons.{" "}
                    </div>
                  </Popup>
                  <div className="progress">
                    <div
                      className="progress-bar color-5"
                      role="progressbar"
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "70%" }}
                    >
                      <span>70%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="progress-wrap">
                  <Popup
                    trigger={
                      <div className="hovertool">
                        <h3>ReactJs</h3>
                      </div>
                    }
                    position="top center"
                    on="hover"
                    arrow={false}
                    offsetY="5"
                    className="foo-content"
                  >
                    {" "}
                    <div>
                      From Javascript libraries Im most familiar with React. For
                      example this site is made using React. There is still
                      plenty to learn tho!{" "}
                    </div>
                  </Popup>
                  <div className="progress">
                    <div
                      className="progress-bar color-6"
                      role="progressbar"
                      aria-valuenow={40}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "40%" }}
                    >
                      <span>40%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="progress-wrap">
                  <Popup
                    trigger={
                      <div className="hovertool">
                        <h3>Unity / Blender / c#</h3>
                      </div>
                    }
                    position="top center"
                    on="hover"
                    arrow={false}
                    offsetY="5"
                    className="foo-content"
                  >
                    {" "}
                    <div>
                      With two game projects behind I have accuired plenty of
                      knowhow about Unity and Blender. Feel free to check out
                      Deadmanship and BTIMEM{" "}
                    </div>
                  </Popup>
                  <div className="progress">
                    <div
                      className="progress-bar color-6"
                      role="progressbar"
                      aria-valuenow={40}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "40%" }}
                    >
                      <span>40%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="progress-wrap">
                  <Popup
                    trigger={
                      <div className="hovertool">
                        <h3>Adobe XD</h3>
                      </div>
                    }
                    position="top center"
                    on="hover"
                    arrow={false}
                    offsetY="5"
                    className="foo-content"
                  >
                    {" "}
                    <div>
                      With two game projects behind me, I have accuired plenty
                      of knowhow about marketing. I would say that Im pretty
                      good at combining my marketing and designing skills.{" "}
                    </div>
                  </Popup>
                  <div className="progress">
                    <div
                      className="progress-bar color-2"
                      role="progressbar"
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "80%" }}
                    >
                      <span>80%</span>
                    </div>
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
