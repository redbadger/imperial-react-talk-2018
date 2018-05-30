import React, { Component } from "react";
import Header from "./Header";

class App extends Component {
  state = {
    name: "Jon Yardley",
    items: [{ id: 0, label: "My first item" }]
  };
  render() {
    return (
      <div>
        <Header name={this.state.name} />
        <ul>
          {this.state.items.map(item => (
            <li key={`li-${item.id}`}>{item.label}</li>
          ))}
        </ul>
        <input type="text" />
        <button>Add Item</button>
      </div>
    );
  }
}

export default App;
