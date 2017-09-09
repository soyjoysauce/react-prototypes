import React from 'react';
import Table from './table';

const students = {
    student:null ,
    course: null ,
    grade:null
    };

export default() =>{
    return(
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table/>
        </div>
    )
}


