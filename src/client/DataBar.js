import React, { Component } from 'react';

export default class DataBar extends Component {

    render() {
        const rowData = this.props;
        //esgScore will act as display text as well as % width for our bar graph
        const esgScore = rowData["ESG Score"].toFixed(2) + '%';
        //To render the bar's colors, get the remaining percentage up to 100
        const color = (100 - rowData["ESG Score"]) + '%';
        //Then set that as an hsl third parameter
        const hsl = "hsl(216, 100%, " + color + ")";

        return (
            <div className={"data-bar-container"}>
                <div className={"score"}>{ esgScore }</div>
                <div className={"bar"}>
                    <div
                        style={{
                            textAlign: 'left',
                            padding: 1,
                            color: 'white',
                            width: esgScore,
                            backgroundColor: hsl,
                            height: 20,
                        }}
                    >
                    </div>
                </div>
            </div>
        )
    }
}