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
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import EditRecipe from './editRecipe';
//will import styling library we will use

const Card =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    h2 {
        align-self:center;
    }
    
    padding:1%;
    border: 1px solid black;
    border: 2px solid #1F1E1E;
    margin: 0 1em;
    padding: 0.25em 1em;
    margin:1%;
    border-radius: 4px;
    width:33%;
`

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
      textAlign: "center",
    },
    media: {
      height: 140,
    },
    modalBox: {
      position: 'absolute',
      width: 600,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const UserRecipeCard = (props) => {
    console.log('USER RECIPE CARD', props);
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
        props.history.push(`/user-recipes-list`)
    }


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

   const handleEdit = e => {
    e.preventDefault();
    props.history.push(`/edit-recipe/${props.recipe.user_id}`);
    // console.log(props);
    // console.log(props)
  };
  
   //this will be used when I get images online
        function imgError(img){
            img.oneError = null;
            img.src = backUpImage;
            // console.log('Triggered Error');
            return true;
        }

    //This display description if present
        function descriptshow(){
            if(props.recipe.description===null){return <p>No Description</p>}
            else{return <p>Description: {props.recipe.description}</p>}
        }
//<img id='foodImg' src= {props.img_url} alt="Food" onError= 'imgError(this)'/>

    function EditButton(recipeUserId) {
        // console.log(props);
        // console.log('localStorage user_id = ' + localStorage.getItem('user_id'));
        // console.log('recipe.user_id = ' + props.user_id);
        if (props.recipe.user_id !== localStorage.getItem('user_id')) { // Set to === for this to only show edit for recipes the logged in user owns
            return <button onClick={handleEdit}>Edit</button>;
        }
        return '';
    }        

    const handleDelete = e => {
        e.preventDefault();
        props.deleteRecipe(props.recipe.id)
        props.history.push('/user-recipe-list')
    }

    return(

        <Card>
            <h2>{props.recipe.title}</h2>
            {//<img src= {backUpImage} />
            }
            {/*<img src={props.recipe.img} alt='Food Image' onError={(e)=>{console.log('Error Triggered'); e.target.onerror = null; e.target.src={backUpImage}}}/>*/}
            <img src={props.recipe.img_url}/>
            <div>
                <p>Type: {props.recipe.type}</p>
                {descriptshow()}
                <p>Ingredients: {props.recipe.ingredients}</p>
                <p>Instructions: {props.recipe.instructions}</p>
            </div>     
            <button onClick={handleOpen}>Edit</button>
            <button onClick={() => props.deleteRecipe(props.recipe.id) & props.history.push(`/recipes-list`)}>Delete</button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
                className={classes.flex}
                >   
                <div className = {classes.modalBox}>
                <EditRecipe {...props} recipe={props.recipe}/>
                </div>
            </Modal>
        </Card>
    ) 
}
export default withRouter(UserRecipeCard);