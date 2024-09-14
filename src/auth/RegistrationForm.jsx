import Input from "../components/Input";
import styles from "./styles";

const RegistrationForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.formStyle}>
        {["firstName", "lastName", "email", "password", "password2"].map(
          (field) => (
            <Input key={field} name={field} handleChange={props.handleChange} />
          ),
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
