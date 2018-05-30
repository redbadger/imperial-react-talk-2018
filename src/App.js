import React, { Component } from "react";
import Header from "./Header";

class App extends Component {
  state = {
    name: "Jon Yardley",
    items: [{ id: 0, label: "My first item" }],
    inputText: ""
  };

  onInputChange(e) {
    const inputText = e.target.value;
    this.setState({ inputText });
  }

  addItem() {
    this.setState({
      items: [
        ...this.state.items,
        {
          id: this.state.items.length + 1,
          label: this.state.inputText
        }
      ],
      inputText: ""
    });
  }

  clearAll() {
    this.setState({
      items: []
    });
  }

  render() {
    return (
      <div>
        <Header name={this.state.name} />
        <p>Number of items: {this.state.items.length}</p>
        <ul>
          {this.state.items.map(item => (
            <li key={`li-${item.id}`}>{item.label}</li>
          ))}
        </ul>
        <input
          type="text"
          onChange={e => this.onInputChange(e)}
          value={this.state.inputText}
        />
        <button onClick={() => this.addItem()}>Add Item</button>
        <button onClick={() => this.clearAll()}>Clear All</button>
      </div>
    );
  }
}

export default App;
