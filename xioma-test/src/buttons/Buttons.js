import React, { Component } from 'react';
import './style.css'
class Buttons extends Component {
  constructor(props){
    super(props);
      this.state = {
        logged: false
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
      //Here is the Buttons
    return (
      <div className="buttons">
        <div className="button" onClick={this.login}>Sign In</div>
        <div className="button" onClick={this.signOut}>Sign Out</div>
        <div className="button">Sign Up</div>
        {this.state.logged && <div> <div className="button">Add New Business Partner</div>
        <div className="button">Show All </div></div>} 
        </div>
    );
  }
}
export default Buttons;
