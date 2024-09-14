import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import styles from "./styles";

const LoginModal = (props) => {
  return (
    <dialog open={props.isModalOpen}>
      <button>close</button>
      {props.isLogin ? <LoginForm /> : <RegistrationForm />}
      <div>
        <div style={styles.messageDiv}>
          <h3>{props.message}</h3>
        </div>
        <button>{props.isLogin ? "Register" : "Login"}</button>
      </div>
    </dialog>
  );
};

export default LoginModal;
