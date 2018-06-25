import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ["Sam ", "Samer ", "Abdul ", "Hunter ", "Nicole ", "Zain "],
      filtered: ""
    };
  }

  filtered(val) {
    this.setState({ filtered: val });
  }
  render() {
    var listed = this.state.names.filter((e, i, a) => {
      return e.includes(this.state.filtered);
    });

    return (
      <div>
        <input
          placeholder="Type here"
          onChange={e => this.filtered(e.target.value)}
        />
        <h4> {listed} </h4>
      </div>
    );
  }
}

export default App;
