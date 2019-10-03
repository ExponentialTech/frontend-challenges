import React, { Component } from 'react';
import AssessmentTable from './assessment-table'


class Page extends Component{


	render(){
		return(
			<div>
				<h1>Impact Assessment Data</h1>
				<AssessmentTable/>
			</div>
		)
	}

}

export default Page;
