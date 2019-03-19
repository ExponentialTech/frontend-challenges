import React, { Component } from 'react';
import MaterialTable from 'material-table';
import Paginate from './Paginate.js';
import DataBar from './DataBar.js';

export default class Table extends Component {

    render() {
        return (
            <MaterialTable
                components={{
                    //Custom Pagination options
                    Pagination: props => (
                        <Paginate {...props} />
                    ),
                }}
                columns={[
                    { title: 'Company Name', field: 'Company Name' },
                    { title: 'ISIN', field: 'ISIN' },
                    { title: 'Total Company Revenue', field: 'Total Revenue' },
                    { title: 'Market Capitalization', field: 'Company Market Cap' },
                    { title: 'Managers', field: 'Women Managers' },
                    { title: 'Employees', field: 'Women Employees' },
                    { title: 'Total', field: 'CO2 Scope 1 & 2 Adjusted' },
                    { title: 'Rev Adj', field: 'CO2 Scope 1 & 2 Revenue Adjusted' },
                    { title: 'Total', field: 'CO2 Scope 3 Adjusted' },
                    { title: 'Rev Adj', field: 'CO2 Scope 3 Revenue Adjusted' },
                    { title: 'ESG Score', field: 'ESG Score', 
                        cellStyle : data => {
                            return {
                                width: "14em",
                                position: "relative",
                            }
                        },
                        //Bar Chart for Esg Scores
                        render: rowData => (
                            <DataBar {...rowData} />
                        )
                    },
                ]}
                data={this.props.data}
                title="Impact Assessment Data"
                options={{
                    paging: true,
                    toolbar: true,
                    showTitle: true,
                    search: false,
                    pageSize: 10
                }}
            />
        )
    }
}