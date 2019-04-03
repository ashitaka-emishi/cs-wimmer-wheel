import React, { Component } from "react";


import "./wheelInput.css";

class WheelInput extends Component {
  render() {
    return (
      <label className="wheel-input">
        <img src={this.props.icon} alt={this.props.name} />
        <input type="range" min="1" max="14" onChange={this.props.onChange} />
      </label>
    );
  }
}

export default WheelInput;
