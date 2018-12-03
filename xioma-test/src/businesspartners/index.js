import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import BusinessPartnerCard from './businessPartnerCard';

class Businessparetners extends Component {
  constructor(props){
    super(props);
  }

  render() {
    var List = this.props.businessparetners.map((partner) =>
      <BusinessPartnerCard updateData={this.props.updateData}
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
    />)
      //Here is the businessparetners
    return (
      <div>
      {this.props.logged && this.props.show &&<div><Table>
        <TableRow>
            <TableCell>CardName</TableCell>
            <TableCell>CardCode</TableCell>
            <TableCell>CardType</TableCell>
            <TableCell>GroupCode</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>ZipCode</TableCell>
            <TableCell>MailAddress</TableCell>
            <TableCell>MailZipCode</TableCell>
            <TableCell>Phone1</TableCell>
            <TableCell>Phone2</TableCell>
          </TableRow>
          <TableBody>
            {List}
          </TableBody>
      </Table>
      <a onClick={()=>{this.props.updatePage(this.props.page+1)}}>next</a> <span />
      <a onClick={()=>{this.props.updatePage(this.props.page-1)}}>before</a></div>}
      </div>
    );
  }
}
export default Businessparetners;
