import React, { Component } from "react";
import Header from "./Header";

class App extends Component {
  state = {
    name: "Jon Yardley"
  };
  render() {
    return <Header name={this.state.name} />;
  }
}

export default App;
