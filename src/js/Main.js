import { Switch, Route } from 'react-router-dom';
import React from 'react';

import Web3 from 'web3'
import { withRouter } from 'react-router-dom'
import TruffleContract from 'truffle-contract'
import lendingRequests from '../../build/contracts/lendingRequests.json'
import Content from './Content'
import 'bootstrap/dist/css/bootstrap.css';
import UserPage from './UserPage';
import GovtAgency from './GovtAgency';
import Credit from './Credit';
import Grant from './Grant';
import App from './App';

class Main extends React.Component{

	constructor(props) {
    super(props)

    this.state = {
      account: '0x0',
      candidates: [],
      hasVoted: false,
      loading: true,
      voting: false,
    }

    if (typeof web3 != 'undefined') {
      this.web3Provider = web3.currentProvider
    } else {
      this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545')
    }

    this.web3 = new Web3(this.web3Provider)

    this.lendingRequests = TruffleContract(lendingRequests)
    this.lendingRequests.setProvider(this.web3Provider)
   // this.web3.eth.defaultAccount=this.web.eth.coinbase;
    //this.castVote = this.castVote.bind(this)
    //this.watchEvents = this.watchEvents.bind(this)
  }


  MyApp = () => (
		<App appstate = {this.state} contract = {this.lendingRequests} />
  )
  MyGovtAgency = () => (
  		<GovtAgency govt1 = {this.state.account} />
  )
  MyUser = () =>(
  	<UserPage users = {this.state.account} web3 = {this.web3} lendingRequests = {this.lendingRequests}/>
  )
render() {
	

	return(
		<Switch>
			<Route 
				exact path='/' 
				component={this.MyApp} />
				
			<Route 
				exact path='/govt'	
				component={this.MyGovtAgency} />
			<Route 
				exact path = '/user'
				component = {this.MyUser} />

			<Route 
				exact path = '/credit'
				component = {Credit} />
			<Route 
				exact path = '/grant'
				component = {Grant} />	
			
		</Switch>
		);
}


}

export default Main;