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


          <table>
            <thead>
              <tr>
                <th colSpan={4}>The Numeric Structure</th>
              </tr>
              <tr>
                <th></th>
                <th colSpan={2}># of Wheels</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td><td>1</td><td>1</td><td>104</td>
              </tr>
              <tr>
                <td>2</td><td>1</td><td>1</td><td>103</td>
              </tr>
              <tr>
                <td>3</td><td>2</td><td>2</td><td>102</td>
              </tr>
              <tr>
                <td>4</td><td>2</td><td>2</td><td>101</td>
              </tr>
              <tr>
                <td>5</td><td>2</td><td>2</td><td>100</td>
              </tr>
              <tr>
                <td style={{color: "red" }}>6</td><td colSpan={2}>OMISSION</td><td style={{color: "red" }}>99</td>
              </tr>



            </tbody>
            <tfoot>
              <tr>
                <th colSpan={4}>Numeric Middle</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
