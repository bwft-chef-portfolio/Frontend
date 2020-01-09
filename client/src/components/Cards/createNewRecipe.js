import React, {useState, useEffect} from 'react';
import RecipeCard from './recipeCard';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
//I still need to add input validation and axios call

//it will take a user id which will be passed in props
//{ user_id: "user_id" (required),
// type : "Breakfast/Lunch/Dinner/Snack" (required),
// img_url: "an img url with .jpg at the end of it",
// title: "a title" (required),
// description: "description,
// ingredients: "ingredients" (required),
// instructions: "instructions" (required) }
const CreateNewRecipe = (props) => {

    const [recipe, setRecipe] = useState(
        {
        user_id:localStorage.getItem('user_id'), //Will be determined by props
        type: "",
        img_url:"",//We will need to do this tomorrow
        title:"",
        description:"",
        ingredients:"",
        instructions:""
        }
    )

    const handleChanges = el => {
        // console.log([el.target.name])
        // console.log(el.target)
        setRecipe({
            ...recipe,
            [el.target.name]:el.target.value
        })
    }
    
    const submitForm = e => {
        e.preventDefault();
        

        axiosWithAuth()
            .post('/recipes', recipe)
            .then(res => {
               
                console.log(res)
                
            })
            .catch(err => {
                console.log(err)
            })
        console.log(recipe);
    }

    // const newRecipe = e => {
    //     e.preventDefault();

    //     axiosWithAuth()
    //         .post('/recipes', recipe)
    //         .then(res => {
    //             localStorage.setItem('token', res.data.payload)
    //             console.log(res)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

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
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
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
            <button type="submit">Submit</button>

        </form>
        {RecipeCard(recipe)}
        </>
    )
}

export default CreateNewRecipe;