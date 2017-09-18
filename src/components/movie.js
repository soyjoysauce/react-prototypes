import React from 'react';

function Movie(props){
    console.log('Movie Info:',props.info);
    const{info}= props;
    return(
        <div>
            <img src="im:image"/>
        </div>
    )
}

export default Movie;