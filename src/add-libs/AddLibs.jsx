import React, { createRef } from "react";
import { connect } from "react-redux";
import FoodInputPanel from "./FoodInputPanel";
import SelectInputsPanel from "./SelectInputsPanel";
import actions from "../redux/actions";

class AddLibs extends React.Component {
  closeproteins = createRef();
  closesides = createRef();
  closevegetables = createRef();
  // addFood(e) {
  //   e.preventDefault();
  //   let key = e.target.childNodes[1].name;
  //   this["close" + key + "s"].current.open = false;

  render() {
    return (
      <React.Fragment>
        <h3>Add Libs</h3>
        <FoodInputPanel
          closeproteins={this.closeproteins}
          closesides={this.closesides}
          closevegetables={this.closevegetables}
        />
        {Object.values(this.props.addlib.user.foods).every(
          (arr) => arr.length > 0,
        ) ? (
          <SelectInputsPanel />
        ) : null}
        {this.props.addlib.alprotein &&
        this.props.addlib.alvegetable &&
        this.props.addlib.alside ? (
          <button onClick={this.props.makeSentence}>Make a sentence</button>
        ) : null}
        <h3>{this.props.addlib.sentence}</h3>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  makeSentence: () => dispatch(actions.makeSentence()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddLibs);
