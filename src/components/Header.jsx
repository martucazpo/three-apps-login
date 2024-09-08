import { Link, useLocation } from "react-router-dom";
import styles from "./styles";

const Header = () => {
  const location = useLocation();
  return (
    <header style={styles.headerStyle}>
      <nav style={styles.navStyle}>
        {location.pathname !== "/" && (
          <Link to="/" style={styles.navLinkStyle}>
            Home
          </Link>
        )}
        {location.pathname !== "/addlibs" && (
          <Link to="/addlibs" style={styles.navLinkStyle}>
            Ad Libs
          </Link>
        )}
        {location.pathname !== "/shopping" && (
          <Link to="/shopping" style={styles.navLinkStyle}>
            Shopping List
          </Link>
        )}
        {location.pathname !== "/recipes" && (
          <Link to="/recipes" style={styles.navLinkStyle}>
            Recipes
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
