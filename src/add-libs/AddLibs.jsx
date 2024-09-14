import React, { createRef } from "react";
import FoodInputPanel from "./FoodInputPanel";
import SelectInputsPanel from "./SelectInputsPanel";

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
    };
    this.handleChange = this.handleChange.bind(this);
    this.addFood = this.addFood.bind(this);
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
      </React.Fragment>
    );
  }
}

export default AddLibs;
