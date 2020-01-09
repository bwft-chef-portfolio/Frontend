import React, {useState, useEffect} from 'react';
import RecipeCard from './recipeCard';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import styled from 'styled-components';
//I still need to add input validation and axios call

//it will take a user id which will be passed in props
//{ user_id: "user_id" (required),
// type : "Breakfast/Lunch/Dinner/Snack" (required),
// img_url: "an img url with .jpg at the end of it",
// title: "a title" (required),
// description: "description,
// ingredients: "ingredients" (required),
// instructions: "instructions" (required) }

const defaultStyling = `
font-family: 'Quicksand', sans-serif;
font-size: 12px;
padding: 10px;
background: papayawhip;
border: none;
display: flex;
flex-direction: column;
align-content: center;
background-color: white;
border: black 1px solid;
width: 15rem;
margin: 8px;
border-radius: 5px;
color:black;
`
const Wrapper =styled.div`
  display:flex;
  flex-flow: column  wrap;
  justify-content:center;
  align-content:center;
`
const Input = styled.input`${defaultStyling}`
const Select = styled.select`${defaultStyling}`
const TextArea =styled.textarea`${defaultStyling}`
const Button =styled.button`${defaultStyling}`


const CreateNewRecipe = (props) => {

    console.log(props)

    const didMount = useEffect(() => {
        console.log('mounted')
        const id = props.match.params.id;
        if (id) {
            console.log(id.substring(1))
            axiosWithAuth()
            .get(`/recipes/${id.substring(1)}/recipe`)
            .then(res => {
                const recipe = res.data;
                setRecipe(recipe);
                console.log('RECIPE');
                console.log(recipe);
            })
            .catch(err => {
                console.log(err)
            })
        }
    }, [])

    const [recipe, setRecipe] = useState(
        {
        user_id: localStorage.getItem('user_id'), //Will be determined by props
        type: "",
        img_url:"",//We will need to do this tomorrow
        title: "",
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
        props.history.push('/recipes-list');
        // No recipe ID, so we create a new recipe
        if (!recipe.id) {
            axiosWithAuth()
            .post('/recipes', recipe)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
            console.log('RECIPE');
            console.log(recipe);
        } else { // We have a recipe ID, update the recipe
            axiosWithAuth()
            .put(`/recipes/${recipe.id}`, recipe)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    return(
        <Wrapper>
        <form onSubmit={submitForm}>
            <label htmlFor='type'>Type:</label>
            <Select
            id="type"
            name="type"
            onChange={handleChanges}
            required
            value={recipe.type.toLowerCase()}>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
            </Select>
            <label htmlFor='title'>Title:</label>
            <Input
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
            <TextArea
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
            <TextArea
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
            <TextArea
            name='instructions'
            type='text'
            id='instructions'
            placeholder='instructions'
            onChange={handleChanges}
            minLength= "1"
            maxLength="500"
            value={recipe.instructions}
            />
            <Button type="submit">Submit</Button>
            <Button onClick={deleteRecipe}>Delete</Button>

        </form>
        {RecipeCard(recipe)}
        </Wrapper>
    )
}

export default CreateNewRecipe;