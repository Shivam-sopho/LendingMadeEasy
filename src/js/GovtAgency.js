import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Aux from './Aux';

class GovtAgency extends Component {
	constructor(props){
		super(props)
	}
	render() {
		console.log(this.props);

		return (
			<Aux>
				<h1>Welcome Govt!</h1>
				<h2> your id = {this.props.govt1}</h2>

			</Aux>
		)
	}
}

export default withRouter(GovtAgency);