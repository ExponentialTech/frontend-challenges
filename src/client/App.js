import React, { Component } from 'react';
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
        );
    }
}