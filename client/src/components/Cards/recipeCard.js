//The purpose of this component is to display a recipe card
// from server. It will take all the info and display it to screen.

//axios. get will contain this information
//objects and methods that are contained in props
// user_id: "user_id" (required),
// type : "Breakfast/Lunch/Dinner/Snack" (required),
// img_url: "an img url with .jpg at the end of it",
// title: "a title" (required),
// description: "description,
// ingredients: "ingredients" (required),
// instructions: "instructions" (required) }

import React, {useState} from 'react';
import { Route, withRouter } from "react-router-dom";
import styled from 'styled-components';
import backUpImage from '../images/pizza.jpg';
import Button from '../FormInputs/Button';
//will import styling library we will use

const Card =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    h2 {
        align-self:center;
    }
    img{
        align-self:center;
        max-width:100%;
    }
    padding:1%;
    background:white;
    border: 1px solid black;
    border: 2px solid #1F1E1E;
    margin: 0 1em;
    padding: 0.25em 1em;
    margin:1%;
    border-radius: 4px;
    width:33%;
`



const RecipeCard = (props) => {
    
   const handleEdit = e => {
    e.preventDefault();
    props.history.push(`/edit-item/${props.id}`);
    console.log(props)
  };
  
   //this will be used when I get images online
        function imgError(img){
            img.oneError = null;
            img.src = backUpImage;
            console.log('Triggered Error');
            return true;
        }

    const oneCard = el =>{
           el.preventDefault();
           //This will link to single
           //props.history.push(`/card/${props.id}`);
     }

    //This display description if present
        function descriptshow(){
            if(props.description===null){return <p>No Description</p>}
            else{return <p>Description: {props.description}</p>}
        }
//<img id='foodImg' src= {props.img_url} alt="Food" onError= 'imgError(this)'/>

    function EditButton(recipeUserId) {
        console.log(props);
        console.log('localStorage user_id = ' + localStorage.getItem('user_id'));
        console.log('recipe.user_id = ' + props.user_id);
        if (props.user_id !== localStorage.getItem('user_id')) { // Set to === for this to only show edit for recipes the logged in user owns
            return <Button onClick={handleEdit}>Edit</Button>;
        }
        return '';
    }        

    return(
        <Card onClick={oneCard} >
            <h2>{props.title}</h2>
            {//<img src= {backUpImage} />
            }
            {/*<img src={props.img} alt='Food Image' onError={(e)=>{console.log('Error Triggered'); e.target.onerror = null; e.target.src={backUpImage}}}/>*/}
            <img src={props.img_url}/>
            <div>
                <p>Type: {props.type}</p>
                {descriptshow()}
                <p>Ingredients: {props.ingredients}</p>
                <p>Instructions: {props.instructions}</p>
            </div>     
            <EditButton recipeUserId={props.user_id} />
        </Card>
    ) 
}
export default withRouter(RecipeCard);