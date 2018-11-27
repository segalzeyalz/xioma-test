import React, { Component } from 'react';
import './style.css'
class Buttons extends Component {
  constructor(props){
    super(props);
      this.state = {
    }
  }
  
  render() {
      //Here is the Buttons
    return (
      <div className="buttons">
        <div className="button" onClick={this.props.login}>Sign In</div>
        <div className="button" onClick={this.props.signOut}>Sign Out</div>
        <div className="button">Sign Up</div>
        {this.props.logged && <div> <div className="button">Add New Business Partner</div>
        <div className="button">Show All </div></div>} 
        </div>
    );
  }
}
export default Buttons;
