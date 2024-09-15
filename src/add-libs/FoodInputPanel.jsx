import { connect } from "react-redux";
import actions from "../redux/actions";

const FoodForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props["close" + props.name + "s"].current.open = false;
    props.addFood(e);
  };
  return (
    <details ref={props["close" + props.name + "s"]}>
      <summary>Add a {props.name}</summary>
      <form onSubmit={handleSubmit}>
        <label htmlFor={props.name}>
          {props.name.replace(props.name[0], props.name[0].toUpperCase())}:
        </label>
        <input
          name={props.name}
          value={props.addlib[props.name]}
          onChange={(e) => props.handleLibsChange(e.target)}
          type="text"
          required
        />
        <button type="submit">add</button>
      </form>
    </details>
  );
};

const FoodInputPanel = (props) => {
  let macros = ["protein", "side", "vegetable"];
  return (
    <div>
      {macros.map((mac) => (
        <FoodForm
          key={mac}
          name={mac}
          closeproteins={props.closeproteins}
          closesides={props.closesides}
          closevegetables={props.closevegetables}
          addlib={props.addlib}
          handleLibsChange={props.handleLibsChange}
          addFood={props.addFood}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  handleLibsChange: (target) => dispatch(actions.handleLibsChange(target)),
  addFood: (event) => dispatch(actions.addFood(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodInputPanel);
