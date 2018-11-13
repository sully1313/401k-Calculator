import React, { Component } from "react";
import CalculatorForm from "./components/calculatorForm/calculatorForm.js";
import Table from "./components/Table/table.js";
import "./App.css";

export default class App extends Component {
  state = {
    fields: {},
    visible: false
  };

  onSubmit = fields => {
    this.setState({ fields, visible: true });
    // this.setState({ visible: true });
  };
  render() {
    return (
      <div className="App">
        <CalculatorForm onSubmit={fields => this.onSubmit(fields)} />
        <p>{JSON.stringify(this.state.fields, null, 2)}</p>
        {this.state.visible ? <Table fields={this.state.fields} /> : null}
      </div>
    );
  }
}
