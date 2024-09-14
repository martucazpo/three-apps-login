import { Link, useLocation } from "react-router-dom";
import styles from "./styles";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav style={styles.navStyle}>
      {location.pathname !== "/apps" && (
        <Link to="/apps" style={styles.navLinkStyle}>
          Home
        </Link>
      )}
      {location.pathname !== "/apps/addlibs" && (
        <Link to="/apps/addlibs" style={styles.navLinkStyle}>
          Ad Libs
        </Link>
      )}
      {location.pathname !== "/apps/shopping" && (
        <Link to="/apps/shopping" style={styles.navLinkStyle}>
          Shopping List
        </Link>
      )}
      {location.pathname !== "/apps/recipes" && (
        <Link to="/apps/recipes" style={styles.navLinkStyle}>
          Recipes
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
