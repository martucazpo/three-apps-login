import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../redux/actions";

class PrivateLanding extends React.Component {
  componentDidMount() {
    if (this.props.auth.isAuth) {
      let appUser = Object.assign({}, this.props.auth.user);
      delete appUser.password;
      this.props.getAppUser(appUser);
    }
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
