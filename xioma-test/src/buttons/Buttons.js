import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import SweetAlert from 'sweetalert2-react';

class Buttons extends Component {

  constructor(props){
    super(props);
      this.state = {
        showLoginSwal:false
    }
    this.login = this.login.bind(this)
  }
  login(){
    this.setState({showLoginSwal:true})
  }
  
  render() {
      //Here is the Buttons
    return (
      <div className="buttons">
        {this.props.logged && <Button onClick={this.props.signOut}>Sign Out</Button>}
        {this.props.logged && <div> <Button>Add New Business Partner</Button>
        <Button>Show All </Button></div>} 
        </div>
    );
  }
}
export default Buttons;
