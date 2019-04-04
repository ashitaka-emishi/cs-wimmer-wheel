import React, { Component } from "react";
import "./idea.css";

import DivineLight from "./img/divine-light.png";
import Sky from "./img/sky.png";
import Land from "./img/land.png";
import Vegetation from "./img/vegetation.png";
import Sunlight from "./img/sunlight.png";
import Moonlight from "./img/moonlight.png";
import Starlight from "./img/starlight.png";
import SeaCreatures from "./img/sea-creatures.png";
import Birds from "./img/birds.png";
import AnimalKingdom from "./img/animal-kingdom.png";
import EyeMind from "./img/eye-mind.png";
import HeatWithFlames from "./img/heart-with-flames.png";
import DominionGavel from "./img/dominion-gavel.png";
import Freedom from "./img/freedom.png";

class Idea extends Component {
  static getIdeas(t1, t2) {
    var ideas = [
      { name: "Divine Light", icon: DivineLight, pos: 0 },
      { name: "Sky", icon: Sky, pos: 1 },
      { name: "Dry Land", icon: Land, pos: 2 },
      { name: "Vegetation", icon: Vegetation, pos: 3 },
      { name: "Greater Light", icon: Sunlight, pos: 4 },
      { name: "Lesser Light", icon: Moonlight, pos: 5 },
      { name: "Starlight", icon: Starlight, pos: 6 },
      { name: "Sea Creatures", icon: SeaCreatures, pos: 7 },
      { name: "Birds of Air", icon: Birds, pos: 8 },
      { name: "Animal Kingdom", icon: AnimalKingdom, pos: 9 },
      { name: "Mind/Image of God", icon: EyeMind, pos: 10 },
      { name: "Human Heart", icon: HeatWithFlames, pos: 11 },
      { name: "Dominion", icon: DominionGavel, pos: 12 },
      { name: "Freedom", icon: Freedom, pos: 13}
    ]

    ideas[t2].pos = t1-1;
    ideas[t2].overlay = true;
    if (ideas[t2].pos < 0) { ideas[t2].pos = 13; }
    ideas[t1].pos = t2-1;
    ideas[t1].overlay = true;
    if (ideas[t1].pos < 0) { ideas[t1].pos = 13; }
    return ideas.map((i, idx) => (<Idea {...i} key={idx} />));
  }

  render() {
    var style = {
      transform: `rotate(-${this.props.pos * (360 / 14) + (180 / 14)}deg)`
    };

    if (this.props.overlay) {
      style.zIndex = 400;
    }

    return (
      <div className="element" style={style}>
        <img src={this.props.icon} alt={this.props.name} style={{ transform: `rotate(${this.props.pos * (360 / 14) + (180 / 14)}deg)` }}></img>
      </div>
    );
  }
}

export default Idea;
