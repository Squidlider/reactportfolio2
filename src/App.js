import React, { Component } from "react";
import "./App.css";
import "./pricing.css";
import Sidebar from "./components/sidebar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Timeline from "./components/timeline";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Work from "./components/work";
import Recentprojects from "./components/recentprojects";
import Pricing from "./components/pricing";
import Rendertest from "./components/rendertest";
import Progress from "./components/progress";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    document.title = "Koskiaho's Portfolio";
  }

  render() {
    return (
      <Router>
        <div id="colorlib-page">
          <div id="container-wrap">
            <Sidebar />
            <div id="colorlib-main">
              <Introduction />
              <Switch>
                <Route path="/pricing" component={Pricing} />
              </Switch>
              <About />
              <Timeline />
              <Skills />
              <Work />
              <Recentprojects />
              {/*  <Rendertest /> */}
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
