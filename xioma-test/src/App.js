import React, { Component } from 'react';
import Buttons from './buttons/Buttons'
import Businessparetners from './businesspartners'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Buttons />
        <Businessparetners businessparetners={"lalala"}/>
      </div>
    );
  }
}
export default App;