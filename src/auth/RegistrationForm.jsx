import { connect } from "react-redux";
import Input from "../components/Input";
import actions from "../redux/actions";
import styles from "./styles";

const RegistrationForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let email =
      props.auth.users.filter((user) => user.email === props.auth.email)
        .length > 0;
    let validated = props.auth.password === props.auth.password2;
    if (email) {
      props.sendMessage(
        "This email is already registered to the database, please login.",
      );
    } else if (!validated) {
      props.sendMessage(
        "The passwords do not match, please re-enter passwords",
      );
    } else {
      props.register();
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.formStyle}>
        {["firstName", "lastName", "email", "password", "password2"].map(
          (field) => (
            <Input key={field} name={field} />
          ),
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  register: () => dispatch(actions.register()),
  sendMessage: (message) => dispatch(actions.sendMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
