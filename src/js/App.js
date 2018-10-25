import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import { withRouter } from 'react-router-dom'
import TruffleContract from 'truffle-contract'
import Election from '../../build/contracts/Election.json'
import Content from './Content'
import 'bootstrap/dist/css/bootstrap.css'

class App extends React.Component {
  

  
  onLogoutHandler = () => {
    this.props.history.push('/user');
  }
  
  onGovtClickHandler = () =>{
    this.props.history.push('/govt');
  }

  onCreditScoreClickHandler = ()=>{
    this.props.history.push('/credit');
  }

  onGrantClickHandler = () =>{
    this.props.history.push('/grant');
  }
  render() {
    return (
      <div class = 'main'>
      <div class='row'>
        <div class='col-lg-12 text-center' >
          <h1>Election Results</h1>
          <p>
          
          </p>
          <br/>
        </div>
      </div>
      <div class = "row">
      <button onClick={this.onLogoutHandler}>Send Lending Request</button>
      {console.log(this.props.appstate)}
      </div>

       <div class = "row">

      <button onClick={this.onGovtClickHandler}>Government Agency Check</button>
      </div>

       <div class = "row">

      <button onClick={this.onCreditScoreClickHandler}>Credit Score Calculation</button>
      </div>

       <div class = "row">

      <button onClick={this.onGrantClickHandler}>Loan Grant By Bank</button>
      </div>
      </div>

    )
  }
}

export default withRouter(App);

