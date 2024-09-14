import React from "react";
import { connect } from "react-redux";

const Landing = (props) =>
  props.auth.isAuth ? (
    <h3>
      Welcome to your private landing, {props.auth.user.firstName}{" "}
      {props.auth.user.lastName}
    </h3>
  ) : (
    <h3>Public Landing</h3>
  );

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(Landing);
