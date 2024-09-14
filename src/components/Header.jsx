import { connect } from "react-redux";
import actions from "../redux/actions";
import Navbar from "./Navbar";
import LoginModal from "../auth/LoginModal";
import styles from "./styles";

const Header = (props) => {
  return (
    <header style={styles.headerStyle}>
      {props.auth.isAuth ? (
        <>
          <Navbar />
          <button onClick={props.logout}>LOGOUT</button>
        </>
      ) : (
        <>
          {props.auth.isModalOpen ? (
            <LoginModal />
          ) : (
            <button onClick={props.openLoginModal}>Login</button>
          )}
        </>
      )}
    </header>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  openLoginModal: () => dispatch(actions.openLoginModal()),
  logout: () => dispatch(actions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
