import React from 'react';
import {IMPACT_COLUMN_HEADERS,
    IMPACT_COLUMN_SUPER_HEADERS } from '../constants/ImpactAssessments';
import './Table.scss';

const Table = ({items}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th className="table-title" colSpan="11">Impact Assessment Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {IMPACT_COLUMN_SUPER_HEADERS.map((obj, index) => {
                        let classes = obj.title === '' ? 'col-title empty' : 'col-title';
                        return (
                            <th colSpan={obj.cols} key={index} className={classes}>
                                {obj.title}
                            </th>
                        )
                    })}
                </tr>
                {/* empty row for layout */}
                <tr><th colSpan="11" className="col-title empty"/></tr>
                <tr>
                    {IMPACT_COLUMN_HEADERS.map((title, index) => {
                        return (
                            <th colSpan="1" key={index} className="col-title">
                                {title}
                            </th>
                        )
                    })}
                </tr>
                {items.map((item, key) => {
                    const rgbValue = `rgb(21, 39, 61, ${parseFloat(item["ESG Score"].toFixed(2))/100})`;
                    const widthValue = `${parseFloat(item["ESG Score"].toFixed(2))}px`;
                    return (
                        <tr key={key}>
                            <td>{item["Company Name"]}</td>
                            <td>{item["ISIN"]}</td>
                            <td className="center-align">{item["Total Revenue"]}</td>
                            <td className="center-align">{item["Company Market Cap"]}</td>
                            <td className="right-align">{item["Women Managers"]}</td>
                            <td className="right-align">{item["Women Employees"]}</td>
                            <td className="right-align">{item["CO2 Scope 1 & 2 Adjusted"]}</td>
                            <td className="right-align">{item["CO2 Scope 1 & 2 Revenue Adjusted"]}</td>
                            <td className="right-align">{item["CO2 Scope 3 Adjusted"]}</td>
                            <td className="right-align">{item["CO2 Scope 3 Revenue Adjusted"]}</td>
                            <td className="esg-cell">
                                {/* box layout divs applied hear to match requested styles from the design
                                this can be revisited to match table layout or convert the table to divs */}
                                <div className="esg-num">{item["ESG Score"].toFixed(2)}</div>
                                <div className="esg-bar" style={{backgroundColor: `${rgbValue}`, width: `${widthValue}`}}></div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}
export default Table;