import React, { Component } from 'react';

export default class Paginate extends Component {

    //method to go back a page except when on 1st page
    handleBackButtonClick = event => {
        if (this.props.page === 0) {
            return;
        }
        this.props.onChangePage(event, this.props.page - 1);
    };

    //method to go to next page unless on last page
    handleNextButtonClick = event => {
        if (this.props.page >= Math.ceil(this.props.count / this.props.rowsPerPage) - 1) {
            return;
        }
        this.props.onChangePage(event, this.props.page + 1);
    };

    render() {
        const { classes, count, page, rowsPerPage, theme } = this.props;

        return (
            <td className={"paginate-cell"}>
                <div className={"paginate-button"} onClick={this.handleBackButtonClick}>
                    <span>PREV</span>
                </div>
                <div className={"paginate-pages"}>
                    <span>PAGE</span>
                    <span className={"number"}>{page + 1}</span>
                </div>
                <div className={"paginate-button"} onClick={this.handleNextButtonClick}>
                    <span>NEXT</span>
                </div>
            </td>
        )
    }
}
