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
//will import styling library we will use

const Card =styled.div`
    display:flex;
    flex-direction:column;
    padding:1%;
    border: 1% solid gray;
    color: red;
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
   

    return(
        <Card>
            <h2>{props.title}</h2>
            {/* I will need to put image here */}
            <p>{props.type}</p>
            <p>{props.description}</p>
            <p>{props.ingredients}</p>
            <p>{props.instructions}</p>
            
            
        </Card>
    ) 
}

export default RecipeCard;