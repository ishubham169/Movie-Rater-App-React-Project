import React from 'react';


function Headers(props){
    if (props.info)
    {
        return <h1>{props.info}</h1>
    }
    else{
        return <h1>No Headers.</h1>
    }
    
}

export default Headers;