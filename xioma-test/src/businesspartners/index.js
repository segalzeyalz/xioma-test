import React, { Component } from 'react';

class Businessparetners extends Component {
  constructor(props){
    super(props);
      this.state = {
    }
  }


  render() {
      //Here is the businessparetners
    return (
      <div className="business">
         {this.props.businessparetners}
      </div>
    );
  }
}
export default Businessparetners;
