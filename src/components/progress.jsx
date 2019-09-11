import React, { Component } from "react";

export default class Progress extends Component {
  render() {
    return (
      <section className="colorlib-work">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="hovereffect">
                <img
                  className="menuplanet img-fluid float-right"
                  src="images/crystalbomb.gif"
                  alt=""
                />
                <div className="overlay">
                  <h2>Particles from DMS</h2>
                  <a className="info" href="#">
                    Unity 3D
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6" mt-md-0 mt-1>
              <div className="hovereffect">
                <img
                  className="img-fluid float-right"
                  src="images/turret_back_thumb.png"
                  alt=""
                />
                <div className="overlay">
                  <h2>3D Model from DMS</h2>
                  <a className="info" href="#">
                    Blender
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="hovereffect">
                <img
                  className="menuplanet img-fluid float-right"
                  src="images/explosion.gif"
                  alt=""
                />
                <div className="overlay">
                  <h2>Particle explosion from DMS</h2>
                  <a className="info" href="#">
                    Unity 3D
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="hovereffect">
                <img
                  className="menuplanet img-fluid float-right"
                  src="images/drill_render_thumb.png"
                  alt=""
                />
                <div className="overlay">
                  <h2>Drill model from DMS</h2>
                  <a className="info" href="#">
                    Blender
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
