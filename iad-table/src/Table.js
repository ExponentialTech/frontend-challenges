import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./App.css";
import { BarChart, Bar, XAxis } from "recharts";

const cx = classNames.bind(styles);

class Table extends Component {
  renderColumn = (columnName, title, sortable) => {
    return (
      <div>
        <th
          className={cx("column-header", sortable ? "sortable-header" : null)}
        >
          <div className={cx(sortable ? "sortable-title" : null)}>
            {title ? title.toUpperCase() : columnName.toUpperCase()}
          </div>
          <div
            onClick={() => this.props.handleOnClick()}
            className={cx(this.props.sorted ? "sorted" : null, "icon")}
          >
            {sortable ? <i class="fas fa-caret-down" /> : null}
          </div>
        </th>
        {this.props.data ? this.props.data.map(item => {
          return (
            <tr className={cx("column-container")}>
              <td className={cx("column-data")}>
                <p>{item[columnName]}</p>
              </td>
            </tr>
          );
        }) : null}
      </div>
    );
  };
  renderESGColumn = columnName => {
    return (
      <div className={cx("esg-column")}>
        <th className={cx("column-header")}>{columnName.toUpperCase()}</th>
        {this.props.data ? this.props.data.map((item, index) => {
          let graphData = [{ score: item["ESG Score"] }];
          return (
            <tr className={cx("data-container")}>
              <td className={cx("column-data")}>{item[columnName]}</td>
              <BarChart width={40} height={100} data={graphData}>
                <XAxis dataKey={index} stroke="#244a7f" />
                <Bar
                  type="monotone"
                  dataKey="score"
                  fill="#244a7f"
                  barSize={40}
                />
              </BarChart>
            </tr>
          );
        }) : null}
      </div>
    );
  };
  render() {
    return (
      <table className={cx("table-header-container")}>
        <div className={cx("table-header-container")}>
          <thead className={cx("table-header")}>
            <tr className={cx("left-side", "header")}>
              {this.renderColumn("Company Name", false, true)}
              <div
                onClick={() => this.setState({ sorted: !this.state.sorted })}
              />
              {this.renderColumn("ISIN")}
              {this.renderColumn("Total Revenue")}
              {this.renderColumn("Company Market Cap")}
            </tr>
            <tr className={cx("right-side", "header")}>
              <th className={cx("column-header")}>
                <th className={"top-header"}>
                  {"Women (PER 100)".toUpperCase()}
                </th>
                <tr className={cx("double-column")}>
                  {this.renderColumn("Women Managers", "Managers", true)}
                  {this.renderColumn("Women Employees", "Employees")}
                </tr>
              </th>
              <th className={cx("column-header")}>
                <th className={"top-header"}>
                  {"CO2 Scope 1 & 2".toUpperCase()}
                </th>
                <tr className={cx("double-column")}>
                  {this.renderColumn("CO2 Scope 1 & 2 Adjusted", "Total")}
                  {this.renderColumn(
                    "CO2 Scope 1 & 2 Revenue Adjusted",
                    "rev adj"
                  )}
                </tr>
              </th>
              <th className={cx("column-header")}>
                <th className={"top-header"}>{"CO2 Scope 3".toUpperCase()}</th>
                <tr className={cx("double-column")}>
                  {this.renderColumn("CO2 Scope 3 Adjusted", "Total")}
                  {this.renderColumn("CO2 Scope 3 Revenue Adjusted", "rev adj")}
                </tr>
              </th>
              {this.renderESGColumn("ESG Score")}
            </tr>
          </thead>
        </div>
      </table>
    );
  }
}

Table.propTypes = {
  data: PropTypes.any,
  sorted: PropTypes.bool,
  handleOnClick: PropTypes.func
};

export default Table;
