import React, { Component } from 'react';
import './style.css'
class Buttons extends Component {
  constructor(props){
    super(props);
      this.state = {
    }
    this.deleteShape = this.deleteShape.bind(this)
  }

  deleteShape(){
    let { shapes } = this.state;
    shapes.splice(shapes.length-1,1)
    this.setState({shapes})
  }


  render() {
      //Here is the Buttons
    return (
      <div className="buttons">
        <div className="button">Sign In</div>
        <div className="button">Sign Up</div>
        {<div className="button">Add New Business Partner</div>}
        <div className="button">Show All </div>
      </div>
    );
  }
}
export default Buttons;
