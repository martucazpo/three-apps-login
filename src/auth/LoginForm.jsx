import { connect } from "react-redux";
import Input from "../components/Input";
import actions from "../redux/actions";
import styles from "./styles";

const LoginForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let email =
      props.auth.users.filter((user) => user.email === props.auth.email)
        .length > 0;
    let validated =
      props.auth.users.filter(
        (user) =>
          user.email === props.auth.email &&
          user.password === props.auth.password,
      ).length > 0;
    if (!email) {
      props.sendMessage("This user is not in the database, please register.");
    } else if (!validated) {
      props.sendMessage(
        "Something went wrong, please check your email and password",
      );
    } else {
      props.login();
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.formStyle}>
        {["email", "password"].map((field) => (
          <Input key={field} name={field} />
        ))}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(actions.login()),
  sendMessage: (message) => dispatch(actions.sendMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
