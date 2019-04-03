import React, { Component } from "react";

import DivineFire from "./img/divine-light-fire-light.png";
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

import ColorWheel from "./img/color-wheel.png";

import Hand from "./components/hand";
import Element from "./components/element";
import WheelInput from "./components/wheelInput";

import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="wheel">
          <img src={ColorWheel} alt="Color Wheel"></img>
          <Hand name="Hand 1" icon={DivineFire} ref="hand1" />
          <Hand name="Hand 2" icon={DivineFire} ref="hand2" />
          
          <Element name="Sky" icon={Sky} ref="sky" />
          <Element name="Land" icon={Land} ref="land" />
          <Element name="Vegetation" icon={Vegetation} ref="vegetation" />
          <Element name="Sunlight" icon={Sunlight} ref="sunlight" />
          <Element name="Moonlight" icon={Moonlight} ref="moonlight" />
          <Element name="Starlight" icon={Starlight} ref="starlight" />
          <Element name="SeaCreatures" icon={SeaCreatures} ref="seaCreatures" />
          <Element name="Birds" icon={Birds} ref="birds" />
          <Element name="AnimalKingdom" icon={AnimalKingdom} ref="animalKingdom" />
          <Element name="EyeMind" icon={EyeMind} ref="eyeMind" />
          <Element name="HeatWithFlames" icon={HeatWithFlames} ref="heatWithFlames" />
          <Element name="DominionGavel" icon={DominionGavel} ref="dominionGavel" />
          <Element name="Freedom" icon={Freedom} ref="freedom" />
        </div>

        <form className="wheel-control">
          <WheelInput name="Hand 1" icon={DivineFire} onChange={(ev) => this.refs.hand1.setPosition(ev.target.value)} />
          <WheelInput name="Hand 2" icon={DivineFire} onChange={(ev) => this.refs.hand2.setPosition(ev.target.value)} />
          <WheelInput name="Land" icon={Land} onChange={(ev) => this.refs.land.setPosition(ev.target.value)} />
          <WheelInput name="Vegetation" icon={Vegetation} onChange={(ev) => this.refs.vegetation.setPosition(ev.target.value)} />
          <WheelInput name="Sunlight" icon={Sunlight} onChange={(ev) => this.refs.sunlight.setPosition(ev.target.value)} />
          <WheelInput name="Moonlight" icon={Moonlight} onChange={(ev) => this.refs.moonlight.setPosition(ev.target.value)} />
          <WheelInput name="Starlight" icon={Starlight} onChange={(ev) => this.refs.starlight.setPosition(ev.target.value)} />
          <WheelInput name="SeaCreatures" icon={SeaCreatures} onChange={(ev) => this.refs.seaCreatures.setPosition(ev.target.value)} />
          <WheelInput name="Birds" icon={Birds} onChange={(ev) => this.refs.birds.setPosition(ev.target.value)} />
          <WheelInput name="AnimalKingdom" icon={AnimalKingdom} onChange={(ev) => this.refs.animalKingdom.setPosition(ev.target.value)} />
          <WheelInput name="EyeMind" icon={EyeMind} onChange={(ev) => this.refs.eyeMind.setPosition(ev.target.value)} />
          <WheelInput name="HeatWithFlames" icon={HeatWithFlames} onChange={(ev) => this.refs.heatWithFlames.setPosition(ev.target.value)} />
          <WheelInput name="DominionGavel" icon={DominionGavel} onChange={(ev) => this.refs.dominionGavel.setPosition(ev.target.value)} />
          <WheelInput name="Freedom" icon={Freedom} onChange={(ev) => this.refs.freedom.setPosition(ev.target.value)} />
        </form>
      </div>
    );
  }
}

export default App;
