import React from 'react';
import Table from './table';

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

export default() =>{
    return(
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table/>
        </div>
    )
}


