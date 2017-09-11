/**
 * Created by soysauce on 9/6/17.
 */
import React from 'react';
import App from './app';

export default (props) => {
   <App/>;
    const tableRows = props.data.map(function(item,[item]){return });
    return (
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Soy</td>
                    <td>Design</td>
                    <td>95</td>
                </tr>
                <tr>
                    <td>Cody</td>
                    <td>Social Science</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>Chris</td>
                    <td>Math</td>
                    <td>99</td>
                </tr>
            </tbody>
        </table>
    )
};
