const Option = (props) => {
  let formatted = props.option
    .split(" ")
    .map(
      (word) =>
        (word = word.toLowerCase().replace(word[0], word[0].toUpperCase())),
    )
    .join(" ");
  return <option value={props.option}>{formatted}</option>;
};

const Select = (props) => {
  let plural = props.name + "s";
  return (
    <>
      <label htmlFor={props.name}>
        {plural.replace(plural[0], plural[0].toUpperCase())}:
      </label>
      <select name={"al" + props.name} onChange={(e) => props.handleChange(e)}>
        <Option option={"-- " + plural + " --"} />
        {props.state.user.foods[plural].map((macro) => (
          <Option key={props.name + "-" + macro} option={macro} />
        ))}
      </select>
    </>
  );
};

const SelectInputsPanel = (props) => {
  let categories = ["protein", "side", "vegetable"];
  return (
    <div>
      {categories.map((category) => (
        <Select
          key={category}
          name={category}
          handleChange={props.handleChange}
          state={props.state}
        />
      ))}
    </div>
  );
};

export default SelectInputsPanel;
