import React, { Component } from 'react';
import './style.css'
class Buttons extends Component {
  constructor(props){
    super(props);
      this.state = {
        logged: true
    }
  }
  render() {
      //Here is the Buttons
    return (
      <div className="buttons">
        <div className="button">Sign In</div>
        <div className="button">Sign Up</div>
        {this.state.logged && <div> <div className="button">Add New Business Partner</div>
        <div className="button">Show All </div></div>} 
        </div>
    );
  }
}
export default Buttons;
