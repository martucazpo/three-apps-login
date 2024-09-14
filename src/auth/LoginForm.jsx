import Input from "../components/Input";
import styles from "./styles";

const LoginForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.formStyle}>
        {["email", "password"].map((field) => (
          <Input key={field} name={field} handleChange={props.handleChange} />
        ))}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
