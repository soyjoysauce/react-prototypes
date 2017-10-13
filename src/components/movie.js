import React from 'react';

function Movie(props){
    console.log('Movie Info:',props.info);
    const{info}= props;
    return(
        <div>
            <img src={info['im:image'][2].label}/>
            <p>{info['im:price'].label}</p>
            <h3>{info['im:name'].label}</h3>
            <p>{info['summary'].label}</p>
            {/*<link src={info['id'].label}>itunes-link</link>*/}
        </div>
    )
}

export default Movie;

// Extras
// Some extra stuff you can try
//
// Below is a list of extra things you can try with this prototype
//
// Clean up the code / remove all the console.logs
// Use Bootstrap and / or custom CSS to display the movies in a more organized and readable format
// Add more info about each movie
// Add a link to iTunes to view more info
// Add a link to the preview
// Play the preview on your site