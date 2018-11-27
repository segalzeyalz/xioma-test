import React, { Component } from 'react';
import Buttons from './buttons/Buttons'
import Businessparetners from './businesspartners'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        logged: false,
        businessparetners:[{
          CardCode:"CardCode1",
          CardName:"CardName1",
          CardType:"CardType1",
          GroupCode:"GroupCode1",
          Address :"Address1",
          ZipCode:"ZipCode1",
          MailAddress:"MailAddress1",
          MailZipCode:"MailZipCode1",
          Phone1:"Phone1",
          Phone2:"Phone21"
        },{
          CardCode:"CardCode2",
          CardName:"CardName2",
          CardType:"CardType2",
          GroupCode:"GroupCode2",
          Address :"Address2",
          ZipCode:"ZipCode2",
          MailAddress:"MailAddress2",
          MailZipCode:"MailZipCode2",
          Phone1:"Phone2",
          Phone2:"Phone22"
      }]
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