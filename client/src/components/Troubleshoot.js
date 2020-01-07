import React, {useState} from 'react';
import Login from './Login/Login';
import CreateNewCard from './Cards/createNewRecipe';
//The purpose of this file is too test our code. This file is never to be merged or pulled.

const Troubleshoot =(props) =>{
return (
    <>
        <Login/>
        <p>Below this the new card creation will be.</p>
        <CreateNewCard/>
    </>
)
 
}
export default Troubleshoot;
