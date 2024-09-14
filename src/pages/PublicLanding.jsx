import { Outlet, Navigate } from "react-router-dom";
import { connect } from "react-redux";

const PublicLanding = (props) =>
  props.isAuth ? <Navigate to="/apps" /> : <Outlet />;

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(PublicLanding);
