import React from 'react';
const UserInput = (props)=>
{
    return(
        <input onChange={props.changed} type="text" />

    );
} 
export default UserInput;
