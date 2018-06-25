import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: ""
    };
    this.alerting = this.alerting.bind(this);
  }
  handelChange(val) {
    this.setState({ userName: val });
  }
  handelChange2(val) {
    this.setState({ password: val });
  }
  alerting() {
    alert(`userName: ${this.state.userName} password: ${this.state.password}`);
    // console.log(this.state);
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <input
          placeholder="Username"
          onChange={e => this.handelChange(e.target.value)}
        />
        <input
          placeholder="Password"
          onChange={e => this.handelChange2(e.target.value)}
        />
        <button onClick={this.alerting}> Login </button>
      </div>
    );
  }
}

export default App;
