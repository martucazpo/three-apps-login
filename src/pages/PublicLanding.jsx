import { Outlet, Navigate } from "react-router-dom";

const PublicLanding = (props) =>
  props.isAuth ? <Navigate to="/apps" /> : <Outlet />;

export default PublicLanding;
