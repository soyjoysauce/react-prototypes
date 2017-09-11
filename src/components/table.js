/**
 * Created by soysauce on 9/6/17.
 */
import React from 'react';


export default (props) => {
    const tableRows = props.data.map((item,index)=> {
        return(
         <tr key={index}>
            <td>{item.student}</td>
            <td>{item.course}</td>
            <td>{item.grade}</td>
        </tr>
        )
    });
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
                {tableRows}
            </tbody>
        </table>
    )
};
