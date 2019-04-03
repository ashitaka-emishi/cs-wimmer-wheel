import React, { Component } from "react";
import "./hand.css";

class Hand extends Component {
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
      <div className="hand" style={{ transform: `rotate(${this.state.pos * (360 / 14)}deg)` }}>
          <img src={this.props.icon} alt="{this.props.name}"></img>
          <div className="arm"></div>
      </div>
    );
  }
}

export default Hand;
