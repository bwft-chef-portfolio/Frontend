import React from 'react'
import {TextField} from '@material-ui/core'
import styled from "styled-components";
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { addRecipe } from "../../actions/index";

const Input = styled.input`
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
  width: 90%;
  margin: 8px;
  border-radius: 5px;
  color:black;
`

const Label = styled.label`
font-size: 20px;
padding: 10px;
margin-top:-10px;
`

const Button = styled.button`
font-family: 'Lato', sans-serif;
width:90%;
height:12%;
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 4px;
  color: #1F1E1E;
  border: 2px solid #1F1E1E;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  margin:30px;
  &:hover {
    background-color: #1F1E1E;
    color: #07FE20;
  }`

//   const handleChanges = e => {
//     setState({
//         userInfo: {
//             ...this.state.userInfo,
//             [e.target.name]: e.target.value
//         }
//     });
// };


const RecipeForm = props => {
    return (
        <div className="container">
                <div>
                  <h1>New Recipe</h1>
                <form noValidate autoComplete="off"
                onSubmit={(addRecipe, tools) => {
                    tools.resetForm();
                    props.addRecipe(addRecipe)}}>
                    
                <select name = "dropdown">
                    <option value = "Choose A Meal" selected>Choose A Meal</option>
                    <option value = "Breakfast">Breakfast</option>
                    <option value = "Lunch">Lunch</option>
                    <option value = "Dinner">Dinner</option>
                </select>

                <input
                    name='title'
                    type='text'
                    id='title'
                    placeholder='dish title'
                    required
                    minLength= "5"
                    maxLength="42"
                    size="15"
                    //value={recipe.title}
                    />

                <TextField
                    id="outlined-multiline-static"
                    label="Ingredients"
                    multiline
                    rows="20"
                    defaultValue="Add Ingredients"
                    variant="outlined"
                    />
                <TextField
                    id="outlined-multiline-static"
                    label="Instructions"
                    multiline
                    rows="20"
                    defaultValue="Add Steps"
                    variant="outlined"
                    />
                    <Button>
                        Save
                    </Button>
                </form>
                </div>
            </div>
    )
}

const mapStateToProps = state => {
    return {
        postingRecipe: false,
        updatingRecipe: false,
        user: state.user
    };
};
export default withRouter(
    connect(
        mapStateToProps,
        {addRecipe}
    )(RecipeForm)
);
