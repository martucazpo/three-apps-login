import React from "react";

class Landing extends React.Component {
  render() {
    return this.props.isAuth ? (
      <h3>Private Landing</h3>
    ) : (
      <h3>Public Landing</h3>
    );
  }
}

export default Landing;
