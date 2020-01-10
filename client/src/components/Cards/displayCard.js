import React, {useState, useEffect} from 'react';
import {Link, withRouter, Redirect, useParams} from 'react-router-dom';
import styled from 'styled-components';
import RecipeCard from './recipeCard';
import axios from 'axios';

//Purpose of this component is to display a single card
//`https://backendchefls.herokuapp.com/api/recipes/${cardId}/recipe`
const DisplayCard = (props) => {
    const cardId = useParams();
    const [card, setCard]= useState();
    
     useEffect( () => {
        console.log("Axios activated")
        axios.get(`https://backendchefls.herokuapp.com/api/recipes/`)
        .then(res =>{
          console.log(res);
          //console.log(card);
          setCard(res.data);
          console.log(card);
        })
        .catch(err=>{
          console.log(`Error:${err}`);
        });

    },[cardId])
    
    console.log(`Display Card loaded`)
    console.log(props)
    console.log(`params:`)
    console.log(cardId)

    // if (!card){
    //     return <div>Processing Card</div>;
    // }

    return(
        <>
            <h1>Awesome!</h1>
            <p>WOOOOOOOOOOOOOOOORDS</p>
        </>
    );
       
        //Link to Recipe List Goes Here
    
}
export default DisplayCard;
//props.history.push(`/edit-item:${props.id}`);