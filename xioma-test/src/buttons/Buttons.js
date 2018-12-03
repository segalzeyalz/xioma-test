import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Register from '../Register'

class Buttons extends Component {
  constructor(props){
    super(props);
      this.state = {
    }
  }

  render() {
      //Here are the Buttons
    return (
      <div className="buttons">
        {this.props.logged && <Button onClick={this.props.signOut}>Sign Out</Button>}
        {this.props.logged && <div> <Button onClick={this.props.makeRegister}>Add New Business Partner</Button>
        <Button onClick={this.props.showAll}>Show All</Button>
        </div>} 
        </div>
    );
  }
}
export default Buttons;
