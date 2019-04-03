import React, { Component } from "react";
import "./element.css";


class Element extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: 1
    };
    this.setPosition = this.setPosition.bind(this);
  }

  setPosition(pos) {
    this.setState({ pos });
  }

  render() {
    return (
      <div className="element" style={{ transform: `rotate(${this.state.pos * (360 / 14) - (180 / 14)}deg)` }}>
        <img src={this.props.icon} alt={this.props.name} style={{ transform: `rotate(-${this.state.pos * (360 / 14) - (180 / 14)}deg)` }}></img>
      </div>
    );
  }
}

export default Element;
