import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
const userObj = {
    name: 'Soy',
    property: luckyNumber()
};

ReactDOM.render(
    <App/>,
    // greeting(userObj),

    document.getElementById('root')
);

function luckyNumber () {
   return Math.floor(Math.random()*1000) +1;
}


function greeting(userObj){

    return (
        <div className="container">
            <h1>Hello d{userObj.name}</h1>
            <h2 className="text-muted">Your Lucky Number is: {userObj.property}</h2>
        </div>
    )

}










