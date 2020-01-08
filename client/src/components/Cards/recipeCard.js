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
import styled from 'styled-components';
import backUpImage from '../images/pizza.jpg';
//will import styling library we will use

const Card =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    h2 {
        align-self:center;
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
    //I may need to set state we will see
    /*
    const [recipe, setRecipe]= useState(
        {
            user_id:props.user_id, //Will be determined by props
            type: "",
            img_url:"",//We will need to do this tomorrow
            title:"",
            description:"",
            ingredients:"",
            instructions:"" 
        }
    )
    */
  
   //this will be used when I get images online
        function imgError(img){
            img.oneError = null;
            img.src = backUpImage;
            console.log('Triggered Error');
            return true;
        }

    //This display description if present
        function descriptshow(){
            if(props.description===null){return <p>No Description</p>}
            else{return <p>Description: {props.description}</p>}
        }
//<img id='foodImg' src= {props.img_url} alt="Food" onError= 'imgError(this)'/>
    return(
        <Card>
            <h2>{props.title}</h2>
            {//<img src= {backUpImage} />
            }
            {/*<img src={props.img} alt='Food Image' onError={(e)=>{console.log('Error Triggered'); e.target.onerror = null; e.target.src={backUpImage}}}/>*/}
            <div>
                <p>Type: {props.type}</p>
                {descriptshow()}
                <p>Ingredients: {props.ingredients}</p>
                <p>Instructions: {props.instructions}</p>
            </div>           
            
        </Card>
    ) 
}
export default RecipeCard;