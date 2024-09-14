const FoodForm = (props) => {
  return (
    <details ref={props["close" + props.name + "s"]}>
      <summary>Add a {props.name}</summary>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor={props.name}>
          {props.name.replace(props.name[0], props.name[0].toUpperCase())}:
        </label>
        <input
          name={props.name}
          value={props.state[props.name]}
          onChange={(e) => props.handleChange(e)}
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
          state={props.state}
          handleSubmit={props.handleSubmit}
          handleChange={props.handleChange}
          closeproteins={props.closeproteins}
          closesides={props.closesides}
          closevegetables={props.closevegetables}
        />
      ))}
    </div>
  );
};

export default FoodInputPanel;
