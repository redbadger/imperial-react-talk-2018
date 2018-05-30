import React, { Component } from "react";
import Header from "./Header";

class App extends Component {
  state = {
    name: "Jon Yardley",
    items: [{ label: "My first item" }]
  };
  render() {
    return (
      <div>
        <Header name={this.state.name} />
        <ul>{this.state.items.map(item => <li>{item.label}</li>)}</ul>
      </div>
    );
  }
}

export default App;
