import React, { Component } from "react";
import DivineFire from "./img/divine-light-fire-light.png";
import Sky from "./img/sea-creatures.png";

import ColorWheel from "./img/color-wheel.png";
import "./App.css";

class App extends Component {

  hand1Change(ev) {
    console.log(ev.target.value);
  }

  render() {
    return (
      <div className="App">
        <div className="Wheel">
          <img src={ColorWheel} alt="Color Wheel"></img>
          <div className="Hand Hand-1">
            <img src={DivineFire} alt="Hand 1"></img>
            <div className="Arm"></div>
          </div>
          <div className="Element Position-1">
            <img src={Sky} alt="sky"></img>
          </div>
        </div>
        <form>
          <input type="range" min="1" max="14" onChange={this.hand1Change}></input>
        </form>
      </div>
    );
  }
}

export default App;
