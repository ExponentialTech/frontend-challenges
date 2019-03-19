import React, { Component } from 'react';
import Table from './Table.js';
import './app.scss';

export default class App extends Component {
    state = { companyData: null };

    componentDidMount() {
        //fetch promise to call api to get company data and set state
        fetch('/api/getCompanyData')
            .then(res => res.json())
            .then(data => {
                this.setState({ companyData: data });
            })
    }

    //Render the DataViz component and pass the company data
    render() {
        return (
            <div className="tableContainer">
                {
                    this.state.companyData ? 
                    <Table data={this.state.companyData} /> : 
                    <h1>Loading.. please wait!</h1>
                }
            </div>
        );
    }
}