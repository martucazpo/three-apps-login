import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../redux/actions";

class PrivateLanding extends React.Component {
  componentDidMount() {
    let appUser = Object.assign({}, this.props.auth.user);
    delete appUser.password;
    console.log(appUser);
    this.props.getAppUser(appUser);
  }
  render() {
    return this.props.auth.isAuth ? <Outlet /> : <Navigate to="/" />;
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  getAppUser: (user) => dispatch(actions.getAppUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateLanding);
