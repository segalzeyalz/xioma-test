import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

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
        <Button className="button" onClick={this.props.login}>Sign In</Button>
        <Button className="button" onClick={this.props.signOut}>Sign Out</Button>
        <Button className="button">Sign Up</Button>
        {this.props.logged && <div> <Button className="button">Add New Business Partner</Button>
        <Button className="button">Show All </Button></div>} 
        </div>
    );
  }
}
export default Buttons;
