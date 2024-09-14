import Navbar from "./Navbar";
import styles from "./styles";

const Header = (props) => {
  return (
    <header style={styles.headerStyle}>
      {props.isAuth ? (
        <>
          <Navbar />
        </>
      ) : (
        <>
          <button>Login</button>
        </>
      )}
    </header>
  );
};

export default Header;
