import React, { createRef } from "react";
import FoodInputPanel from "./FoodInputPanel";
import SelectInputsPanel from "./SelectInputsPanel";
import sentences from "./sentences";

class AddLibs extends React.Component {
  closeproteins = createRef();
  closesides = createRef();
  closevegetables = createRef();
  constructor() {
    super();
    this.state = {
      user: {
        foods: {
          proteins: [],
          sides: [],
          vegetables: [],
        },
      },
      protein: "",
      side: "",
      vegetable: "",
      sentence: "",
      alprotein: "",
      alvegetable: "",
      alside: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.addFood = this.addFood.bind(this);
    this.makeSentence = this.makeSentence.bind(this);
  }
  handleChange(e) {
    let { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  }
  addFood(e) {
    e.preventDefault();
    let key = e.target.childNodes[1].name;
    this["close" + key + "s"].current.open = false;
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        foods: {
          ...this.state.user.foods,
          [key + "s"]: [this.state[key], ...this.state.user.foods[key + "s"]],
        },
      },
      [key]: "",
    });
  }
  makeSentence() {
    let random = sentences[Math.floor(Math.random() * sentences.length)];
    random = random
      .replace("XXproteinXX", this.state.alprotein)
      .replace("XXvegetableXX", this.state.alvegetable)
      .replace("XXsideXX", this.state.alside);
    this.setState({
      ...this.state,
      sentence: random,
    });
  }
  render() {
    return (
      <React.Fragment>
        <h3>Add Libs</h3>
        <FoodInputPanel
          state={this.state}
          handleChange={this.handleChange}
          closeproteins={this.closeproteins}
          closesides={this.closesides}
          closevegetables={this.closevegetables}
          handleSubmit={this.addFood}
        />
        {Object.values(this.state.user.foods).every((arr) => arr.length > 0) ? (
          <SelectInputsPanel
            handleChange={this.handleChange}
            state={this.state}
          />
        ) : null}
        {this.state.alprotein && this.state.alvegetable && this.state.alside ? (
          <button onClick={this.makeSentence}>Make a sentence</button>
        ) : null}
        <h3>{this.state.sentence}</h3>
      </React.Fragment>
    );
  }
}

export default AddLibs;
