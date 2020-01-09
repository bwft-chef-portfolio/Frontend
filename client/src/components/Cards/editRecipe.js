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
const initialItem = {
    
    user_id: localStorage.getItem('user_id'), //Will be determined by props
    type: "",
    img_url:"",//We will need to do this tomorrow
    title: "",
    description:"",
    ingredients:"",
    instructions:""
    
}

const EditRecipe = (props) => {

    console.log(props)

    const [recipe, setRecipe] = useState(initialItem);

    useEffect(() => {
        const recipeToEdit = props.recipes.find(
            e => `${e.recipe.id}` === props.match.params.id
        );
        if (recipeToEdit) {
            setRecipe(recipeToEdit)
        }
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

        // No recipe ID, so we create a new recipe
        axiosWithAuth()
        .put(`/recipes/${recipe.id}`, recipe)
        .then(res => {
            console.log(res)
            props.updateRecipe(res.data);
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

export default EditRecipe;