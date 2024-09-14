import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import actions from "../redux/actions";
import styles from "./styles";

const LoginModal = (props) => {
  return (
    <dialog open={props.auth.isModalOpen}>
      <button onClick={props.closeLoginModal}>close</button>
      {props.auth.isLogin ? <LoginForm /> : <RegistrationForm />}
      <div>
        <div style={styles.messageDiv}>
          <h3>{props.auth.message}</h3>
        </div>
        <button
          onClick={
            props.auth.isLogin ? props.displayRegistration : props.displayLogin
          }
        >
          {props.auth.isLogin ? "Register" : "Login"}
        </button>
      </div>
    </dialog>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  closeLoginModal: () => dispatch(actions.closeLoginModal()),
  displayLogin: () => dispatch(actions.displayLogin()),
  displayRegistration: () => dispatch(actions.displayRegistration()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
