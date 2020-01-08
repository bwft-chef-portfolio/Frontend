import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import axios from 'axios'
import TestDishData from '../../testdata/testDishData'
import styled from "styled-components";
import RecipeCard from './recipeCard'
import RecipeForm from './RecipeForm'

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



const RecipeList = props => {

    return (
        <div>
            <RecipeForm />
            <Grid 
            container 
            direction="column"
            justify="center"
            alignItems="center"
            >
            {TestDishData.map(recipe => {
                return <RecipeCard recipe={recipe} />
            })}
            </Grid>
            <Button>New Recipe</Button>
        </div>
    )
}

export default RecipeList
