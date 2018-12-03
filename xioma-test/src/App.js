import React, { Component } from 'react';
import Buttons from './buttons/Buttons'
import Businessparetners from './businesspartners'
import Login from './Login'
import Header from './Header'
import Register from './Register'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        logged: false,
        businessparetners:[],
        photoSize:'110px',
        showRegister:false,
        page:1
    }
    this.login = this.login.bind(this)
    this.signOut = this.signOut.bind(this)
    this.updatePage = this.updatePage.bind(this)
    this.updateData = this.updateData.bind(this)
    this.makeRegister = this.makeRegister.bind(this)
    this.showAll = this.showAll.bind(this)
  }
  showAll(){
    this.setState({showRegister:false})
  }
  updatePage(page){
    this.setState({page})
  }
  makeRegister(){
    this.setState({showRegister:true})
  }
  componentDidMount() {
    fetch(`http://localhost:3001/businessparetners?_page=${this.state.page}`)
      .then(response => response.json())
      .then(data => this.setState({ businessparetners:data }));
  }
  componentDidUpdate(prevProps, prevState){
    if(this.state.page!==prevState.page){
      fetch(`http://localhost:3001/businessparetners?_page=${this.state.page}`)
      .then(response => response.json())
      .then(data => this.setState({ businessparetners:data }));
    }
  }

  updateData(cardCode, obj){
    let { businessparetners } = this.state;
    //Get the index in order to update it
    let idx = businessparetners.findIndex((elem)=>{
      return elem.CardCode==cardCode
    });
    businessparetners[idx] = obj; 
    this.setState({businessparetners})
  }

  login(){
    this.setState({logged:true, photoSize:'80px'})
  }
  signOut(){
    this.setState({logged:false, photoSize:'110px'})
  }
  render() {
    let {logged, businessparetners, page, showRegister} = this.state;
    return (
      <div className="App">
        <Header height={this.state.photoSize}/>
        <Login show={!showRegister} login={this.login} logged={logged}/>
        <Buttons showAll={this.showAll} makeRegister={this.makeRegister} login={this.login} signOut={this.signOut} logged={this.state.logged}/>
        <Register showAll={this.showAll} makeRegister={this.makeRegister} show={showRegister && logged}/>
        <Businessparetners show={!showRegister && logged} updateData={this.updateData} page={page} updatePage={this.updatePage} logged={logged} businessparetners={businessparetners}/>
      </div>
    );
  }
}
export default App;