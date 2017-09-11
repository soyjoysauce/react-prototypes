import React from 'react';
import Table from './table';

export default() =>{
    const students = [
        {
        student:'Soy' ,
        course: 'Design' ,
        grade:97
        },
        {
        student:'Cody' ,
        course: 'Social Science' ,
        grade: 98
        },
        {
        student: 'Chris' ,
        course: 'Math' ,
        grade: 99
        }];

    return(
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>;
            <Table/>
        </div>
    )
}


