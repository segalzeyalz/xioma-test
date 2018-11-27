import React, { Component } from 'react';
import Buttons from './buttons/Buttons'
import Businessparetners from './businesspartners'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        logged: false,
        businessparetners:["lalala", "momo"]
    }
    this.login = this.login.bind(this)
    this.signOut = this.signOut.bind(this)
  }
  login(){
    this.setState({logged:true})
  }
  signOut(){
    this.setState({logged:false})
  }
  render() {
    return (
      <div className="App">
        <Buttons login={this.login} signOut={this.signOut} logged={this.state.logged}/>
        <Businessparetners businessparetners={this.state.businessparetners}/>
      </div>
    );
  }
}
export default App;