import React, { Component } from 'react';
import CalculatorForm from './components/calculatorForm/calculatorForm.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CalculatorForm/>
      </div>
    );
  }
}

export default App;
