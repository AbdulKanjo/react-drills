import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: ["the secound one ", "the secound one ", "from project 1"]
    };
  }
  render() {
    var list = this.state.data.map((e, i, a) => <h2 key={i}>{e}</h2>);

    return <ul>{list}</ul>;
  }
}

export default App;
