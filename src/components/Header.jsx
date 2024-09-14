import Navbar from "./Navbar";
import LoginModal from "../auth/LoginModal";
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
          {props.isModalOpen ? (
            <LoginModal isLogin={true} isModalOpen={true} />
          ) : (
            <button>Login</button>
          )}
        </>
      )}
    </header>
  );
};

export default Header;
