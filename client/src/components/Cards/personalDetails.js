
//Takes a props containing:
//{ username: "username"(required and unique),
// password: "password"(required),
// email: "email", first_name:
// "a name", last_name: "a name",
// phone: "123-443-4231", 
//location: "location"}

import React, {useState} from 'react';
import styled from 'styled-components';
//will import styling library we will use

const Card =styled.div`
    display:flex;
    flex-direction:column;
    padding:1%;
    border: 1% solid gray;
    color: red;
`

const PersonalDetails =(props) =>{
    return(
        <Card>
            <h2>{props.username}</h2>
            {/* I will need to put image here */}
            <p>{props.email}</p>
            <p>{`${props.first_name} ${props.last_name}`}</p>
            <p>{props.phone}</p>
            <p>{props.location}</p>
            
        </Card>
    )
}

export default PersonalDetails;