import { Navigate, Outlet } from "react-router-dom";

const PrivateLanding = (props) =>
  props.isAuth ? <Outlet /> : <Navigate to="/" />;

export default PrivateLanding;
