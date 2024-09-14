const Input = (props) => {
  return (
    <>
      <label htmlFor={props.name}>
        {!props.labelTxt && props.name !== "password2"
          ? props.name
              .split(/(?<=[a-z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])/)
              .map(
                (word) =>
                  (word = word
                    .toLowerCase()
                    .replace(word[0], word[0].toUpperCase())),
              )
              .join(" ") + ":"
          : !props.labelText && props.name === "password2"
            ? "Please re-enter password:"
            : props.lableTxt}
      </label>
      <input
        name={props.name}
        id={props.name}
        value=""
        type="text"
        onChange={(e) => props.handleChange(e)}
        required
      />
    </>
  );
};

export default Input;
