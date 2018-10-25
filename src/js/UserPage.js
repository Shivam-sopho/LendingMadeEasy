import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Aux from './Aux';

class UserPage extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	name: '',
    	address : '',
    	pan : '',
    	aadhar :'',
    	account : 0X0
    };

    this.handlenameChange = this.handlenameChange.bind(this);
    this.handleaddressChange = this.handleaddressChange.bind(this);
	this.handleaadharChange = this.handleaadharChange.bind(this);
	this.handlepanChange = this.handlepanChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
   }
	handleSubmit(event) {
    event.preventDefault();
    
    this.props.web3.eth.getCoinbase((err,account)=>{
    	this.setState({account})
    	this.props.lendingRequests.deployed().then((lendingRequestInstance)=>{
    		this.request = lendingRequestInstance;
    		this.request.DetailsLenderGovt(3);
    		console.log("request Created");

    	})
    });

  }
  handlenameChange(event) {
    this.setState({name: event.target.value});
  }
  
  handleaddressChange(event){
  	this.setState({address : event.target.value});
  }
  handlepanChange(event) {
    this.setState({pan: event.target.value});
  }
  handleaadharChange(event){
  	this.setState({aadhar : event.target.value});
  }

	render() {
		console.log(this.props)
		return (
			<Aux>
				<h1>Welcome User!</h1>
				<h3> </h3>
				<h2> Please Enter your Request </h2>
				<form onSubmit={this.handleSubmit}>
        		<label>
          		Name:
          		<input type="text"  onChange={this.handlenameChange} />
          		Address:
          		<input type="text"  onChange={this.handleaddressChange} />
          		Aadhar:
          		<input type="text"  onChange={this.handleaadharChange} />
          		Pan:
          		<input type="text"  onChange={this.handlepanChange} />
        		</label>
        		<input type="submit" value="Submit" />
      			</form>
			</Aux>
		)
	}
}

export default withRouter(UserPage);