import React, { Component } from "react";

class errorBound extends Component {
  constructor() {
    super();
  }

  componentDidCatch(error) {
    alert("woii");
    console.log("TC-99", error);
  }
  render() {
    return this.props.children;
  }
}

export default errorBound;
