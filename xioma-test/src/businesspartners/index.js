import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import BusinessPartnerCard from './businessPartnerCard';

class Businessparetners extends Component {
  constructor(props){
    super(props);
      this.state = {
    }
  }

  render() {
    var List = this.props.businessparetners.map((partner) =><ul>
      <BusinessPartnerCard
      CardCode={partner.CardCode}
      CardName={partner.CardName}
      CardType={partner.CardType}
      GroupCode={partner.GroupCode}
      Address={partner.Address}
      ZipCode={partner.ZipCode}
      MailAddress={partner.MailAddress}
      MailZipCode={partner.MailZipCode}
      Phone1={partner.Phone1}
      Phone2={partner.Phone2}
    />
      
    </ul>)
      //Here is the businessparetners
    return (
      <ListItem>
         {List}
      </ListItem>
    );
  }
}
export default Businessparetners;
