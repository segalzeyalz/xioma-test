import React, { Component } from 'react';
import Buttons from './buttons/Buttons'
import Businessparetners from './businesspartners'
import Login from './Login'
import Header from './Header'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        logged: false,
        businessparetners:[]
    }
    this.login = this.login.bind(this)
    this.signOut = this.signOut.bind(this)
  }
  componentDidMount() {
    fetch('http://localhost:3000/businessparetners')
      .then(response => response.json())
      .then(data => this.setState({ businessparetners:data }));
  }

  login(){
    this.setState({logged:true})
  }
  signOut(){
    this.setState({logged:false})
  }
  render() {
    let {logged, businessparetners} = this.state;
    return (
      <div className="App">
        <Header/>
        <Login login={this.login} logged={logged}/>
        <Buttons login={this.login} signOut={this.signOut} logged={this.state.logged}/>
        <Businessparetners logged={logged} businessparetners={businessparetners}/>
        
      </div>
    );
  }
}
export default App;