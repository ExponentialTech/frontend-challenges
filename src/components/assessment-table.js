import React, { Component } from 'react';
import '../styles/table.scss';
import TableHeader from './table-header.js';
import SuperTableHeader from './super-table-header.js';
import TableRow from './table-row.js';
import Paginator from './paginator.js';
import { apiMethods } from '../api/api'

class AssessmentTable extends Component{

	state = {
		impacts: [],
		lastRecord: -1,
		page:0
	}

	componentDidMount(){
		this.nextPage();
	}


	getImpacts(start, end, page){
		let impacts;
		const lsPageString = `impactsPg${page}`;

		if(localStorage.getItem(lsPageString)){
			const cachedImpacts = localStorage.getItem(lsPageString)
			impacts = JSON.parse(cachedImpacts);
		} else {
			impacts = apiMethods.getImpacts(start, end);
			localStorage.setItem(lsPageString , JSON.stringify( impacts));
		}
		return impacts;
	}

	nextPage(){
		//the record after the current last record being shown
		const firstRecord = this.state.lastRecord + 1;
		//the record that is 10 after that
		const finalRecord = firstRecord + 10;
		//get the 10 records after the current record being shown 
		const page = this.state.page + 1;
		const impacts = this.getImpacts(firstRecord, finalRecord, page);

		//set the new last record, one past where the new last record will be
		const lastRecord = finalRecord + 1;
		if(impacts.length > 0 ){
			this.setState({
				impacts,
				page,
				lastRecord
			})
		} else {
			this.setState({
				impacts
			})
		}
	}

	prevPage(){
		if(this.state.page - 1 !== 0){
			//the record 10 before the current last record being shown
			const firstRecord = this.state.lastRecord - 21;
			//the record that is 10 after that
			const finalRecord = firstRecord + 10;
			//get the 10 records before the current record being shown 
			const page = this.state.page - 1;
			const impacts = this.getImpacts(firstRecord, finalRecord, page);
			//set the new last record, one before where the new last record will be
			const lastRecord = finalRecord - 1;			
			this.setState({
				impacts,
				page,
				lastRecord
			})
		}

	}


	getType(type){
		const types = {
			"Company Name":"Company Name",
			"ISIN":"ISIN",
			"TOTAL COMPANY REVENUE":"Total Revenue",
			"MARKET CAPITALIZATION":"Company Market Cap",
			"MANAGERS":"Women Managers",
			"EMPLOYEES":"Women Employees",
			"TOTAL-scope12":"CO2 Scope 1 & 2 Adjusted",
			"REV ADJ-scope12":"CO2 Scope 1 & 2 Revenue Adjusted",
			"TOTAL-scope3":"CO2 Scope 3 Adjusted",
			"REV ADJ-scope3":"CO2 Scope 3 Revenue Adjusted",
			"ESG SCORE":"ESG Score"
		}
		return types[type];
	}


	sortNumber(type){
		const impacts = this.state.impacts.sort((a, b) => 
			//convert dollar strings to numerical values before comparing
			+a[type].toString().replace(/[^0-9\.]+/g, "") > +b[type].toString().replace(/[^0-9\.]+/g, "") ? 1 : -1);
		this.setState({
			impacts
		})
	}

	sort(type){
		type = this.getType(type);
		const convertNumbers = ["Total Revenue", "Company Market Cap", "CO2 Scope 1 & 2 Adjusted",  "CO2 Scope 1 & 2 Revenue Adjusted", "CO2 Scope 3 Adjusted","CO2 Scope 3 Revenue Adjusted"];
		if(convertNumbers.includes(type)){
			this.sortNumber(type);
		} else {
			const impacts = this.state.impacts.sort((a, b) => 
				a[type] > b[type] ? 1 : -1);
			this.setState({
				impacts
			})
		}
	}

	getCleanHeader(header){
		const n = header.indexOf('-');
		return header.substring(0, n !== -1 ? n : header.length);
	}

	getSecondLineText(header){
		return (header === "TOTAL COMPANY REVENUE" || header === "MARKET CAPITALIZATION") ? header.substr(header.indexOf(" ") + 1) : null;
	}


	render(){
		//note superHeaders has less values than headers to account a super header taking up the length of two columns, i.e. one superheader = two regular headers
		const superHeaders = [
			"",
			"",
			"",
			"",
			"WOMEN (PER 100)",
			"CO2 SCOPE 1 & 2",
			"CO2 SCOPE 3",
			"",
			""
		]

		//query string added to headers to distinguish headers with same name
		const headers = [
			"COMPANY NAME",
			"ISIN",
			"TOTAL COMPANY REVENUE",
			"MARKET CAPITALIZATION",
			"MANAGERS",
			"EMPLOYEES",
			"TOTAL-scope12",
			"REV ADJ-scope12",
			"TOTAL-scope3",
			"REV ADJ-scope3",
			"ESG SCORE"
		];
		return(
			<div className="table-wrap">
				<table className="main-table">
					<thead>
						<tr className="low-row">
							{
								superHeaders.map((header, index) => 
									<SuperTableHeader text={header} key={index}/> 
								)
							}
						</tr>
						<tr className="low-row">
							{
								headers.map((header, index) => {
									//clean out query string
									const cleanHeader = this.getCleanHeader(header)
									const secondLineText = this.getSecondLineText(header);
									return <TableHeader 
										key={index} 
										text={cleanHeader} 
										onSort={() => this.sort(header)}
										classString={header}
										secondLineText={secondLineText}
									/> 
								})
							}
						</tr>
					</thead>
					<tbody>
						{
							this.state.impacts.length > 0 ? (
								this.state.impacts.map((impact) => <TableRow 
									impact={impact} 
									key={impact.ISIN}
									/>)
							) : (
								<tr>
									<td colSpan={headers.length}>No More Records</td>
								</tr>
							)

						}
					</tbody>
					<tfoot>
						<tr>
							<td colSpan={headers.length} className="footer">
								<Paginator 
								onNext={() => this.nextPage()} 
								onPrev={() => this.prevPage()} 
								pageNumber={this.state.page}
								/>
							</td>
						</tr>
					</tfoot>				
				</table>
			</div>
		)
	}

}

export default AssessmentTable;
