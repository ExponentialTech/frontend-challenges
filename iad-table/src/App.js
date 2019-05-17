import React, { Component } from "react";
import Table from "./Table";
import classNames from "classnames/bind";
import styles from "./App.css";
import data from "./data/data.json";

const cx = classNames.bind(styles);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sorted: false
    };
  }

  handleOnClick = () => {
    this.setState({ sorted: !this.state.sorted })
  }
  render() {
    let sortedData = data.slice(0)
    if (this.state.sorted) {
      sortedData.sort((a, b) => {
        return a["Company Name"] > b["Company Name"] ? 1 : -1
      })
    }
    return (
      <div className={cx("app")}>
        <div className={cx("app-header-container")}>
          <header className={cx("app-header")}>Impact Assessment Data</header>
        </div>
        <div>
          <div className={cx("table-container")}>
            <Table data={this.state.sorted ? sortedData : data} sorted={this.state.sorted} handleOnClick={this.handleOnClick} />
          </div>
        </div>
      </div>
    );
  }
};

export default App;
