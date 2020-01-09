import React, {useState, useEffect} from 'react';
import RecipeCard from './recipeCard';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {editRecipe} from '../../actions/index';

//I still need to add input validation and axios call

//it will take a user id which will be passed in props
//{ user_id: "user_id" (required),
// type : "Breakfast/Lunch/Dinner/Snack" (required),
// img_url: "an img url with .jpg at the end of it",
// title: "a title" (required),
// description: "description,
// ingredients: "ingredients" (required),
// instructions: "instructions" (required) }

const EditRecipe = (props) => { 

    console.log(props)

    const initialState = {
    
        user_id: localStorage.getItem('user_id'), 
        type: "",
        img_url:"",
        title: "",
        description:"",
        ingredients:"",
        instructions:""
        
    }
    const [recipe, setRecipe] = useState(initialState);


    useEffect(() => {
        setRecipe(props.recipe)
        console.log('EDIT RECIPE PROPS', props);
    }, [props.recipes, props.match.params.id]);

    const handleChanges = el => {
        // console.log([el.target.name])
        // console.log(el.target)
        const value = el.target.name === 'type' ? el.target.value.toLowerCase() : el.target.value;
        setRecipe({
            ...recipe,
            [el.target.name]:value
        })
    }

    const deleteRecipe = e => {
        e.preventDefault();
        axiosWithAuth()
        .delete(`/recipes/${recipe.id}`)
        .then(res => {
            console.log(res)
            props.history.push(`/user-recipes-list`);
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    const submitForm = e => {
        e.preventDefault();
        props.history.push(`/user-recipes-list`)

        axiosWithAuth()
        .put(`/recipes/${recipe.id}`, props.title, props.img_url, props.type, props.description, props.ingredients, props.instructions)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <>
        <form onSubmit={submitForm}>
            <label htmlFor='type'>Type:</label>
            <select
            id="type"
            name="type"
            onChange={handleChanges}
            required
            value={recipe.type}>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
            </select>
            <label htmlFor='title'>Title:</label>
            <input
            name='title'
            type='text'
            id='title'
            placeholder='dish title'
            onChange={handleChanges}
            required
            minLength= "5"
            maxLength="42"
            size="15"
            value={recipe.title}
            />
            {/*Leaving off image url until stretch time */}
            <label htmlFor='description'>Description:</label>
            <textarea
            name='description'
            type='text'
            id='description'
            placeholder='description'
            onChange={handleChanges}
            minLength= "1"
            maxLength="500"
            value={recipe.description}
            />
            <label htmlFor='ingredients'> Ingredients:</label>
            <textarea
            name='ingredients'
            type='text'
            id='ingredients'
            placeholder='ingredients'
            onChange={handleChanges}
            minLength= "1"
            maxLength="500"
            value={recipe.ingredients}
            />
            <label htmlFor='instructions'>Instructions:</label>
            <textarea
            name='instructions'
            type='text'
            id='instructions'
            placeholder='instructions'
            onChange={handleChanges}
            minLength= "1"
            maxLength="500"
            value={recipe.instructions}
            />
            <button type="submit">Edit</button>
            <button onClick={deleteRecipe}>Delete</button>

        </form>
        <RecipeCard recipe={recipe}/>
        </>
    )
}

const mapStateToProps = state => {
    return {
        userId: state.userId,
        error: state.userId,
        recipes: state.recipes
    };
};

export default withRouter(
    connect(
        mapStateToProps, 
        {editRecipe}
    )(EditRecipe)
) 