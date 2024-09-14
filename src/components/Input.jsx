import { connect } from "react-redux";
import actions from "../redux/actions";

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
        value={props.auth[props.name]}
        type="text"
        onChange={(e) => props.handleAuthChange(e.target)}
        required
      />
    </>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  handleAuthChange: (target) => dispatch(actions.handleAuthChange(target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
