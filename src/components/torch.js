import React, { Component } from "react";

import TorchIcon from "./img/torch.png";
import "./torch.css";

class Torch extends Component {
  render() {
    return (
      <div className="torch" style={{ transform: `rotate(-${this.props.pos * (360 / 14)}deg)` }}>
          <img src={TorchIcon} alt="Torch"></img>
          <div className="arm"></div>
      </div>
    );
  }
}

export default Torch;
