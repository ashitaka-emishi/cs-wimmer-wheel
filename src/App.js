import React, { Component } from "react";



import ColorWheel from "./components/img/color-wheel.png";

import Wheelwork from "./wheelwork";
import Torch from "./components/torch";
import Idea from "./components/idea";

import "./app.css";

class App extends Component {
  constructor() {
    super();
    this.concepts = Wheelwork.getAllConcepts();

    this.state = { concept: 0 };
    this.changeConcept = this.changeConcept.bind(this);
  }

  changeConcept(ev) {
    var newConcept;
    if (ev.target.innerText === "Prev") {
      newConcept = this.state.concept - 1;
      if (newConcept < 0) {
        newConcept = 0;
      }
    } else {
      newConcept = this.state.concept + 1;
      if (newConcept > this.concepts.length - 1) {
        newConcept = this.concepts.length -1;
      } 
    }
    this.setState({ concept: newConcept });
  }



  render() {
    var currentConcept = this.concepts[this.state.concept];
    var conceptText = (currentConcept.getFullConcept) ? currentConcept.getFullConcept() : `${currentConcept.concept} omission`;
    var wheelHtml = (currentConcept.getFullConcept) ? (
      <div className="wheel">
        <img src={ColorWheel} alt="Color Wheel"></img>
        <Torch pos={currentConcept.t1} />
        <Torch pos={currentConcept.t2} />
        {Idea.getIdeas(currentConcept.t1, currentConcept.t2)}
      </div>) : (<div className="wheel"></div>);

    return (
      <div className="app">
        {wheelHtml}

        <div className="wheel-control">
          <button onClick={this.changeConcept}>Prev</button>
          <h3>Concept {conceptText}</h3>
          <button onClick={this.changeConcept}>Next</button>
        </div>
      </div>
    );
  }
}

export default App;
