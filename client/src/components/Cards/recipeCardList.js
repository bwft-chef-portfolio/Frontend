import React from 'react';
import RecipeCard from './recipeCard';
import SearchForm from './SearchForm'
import SearchForm2 from './SearchForm2';
import styled from 'styled-components';

//styleing will go here
const RecipeList = styled.div`
  display:flex;
  flex-flow: row wrap;
  justify-content:space-evenly;
`

function RecipeCardList(props) {

  console.log('RECIPE CARD LIST PROPS', props)
  return (
   
    <RecipeList>
       {console.log('Recipe card list props', props)}
      
       {/* {props.recipes.map(recipe => (
         <RecipeCard key={recipe.id} recipe={recipe}/>
      ))} */}

        <SearchForm2 recipes={props.recipes}/>
        {/* <SearchForm recipe={props.recipes}/> */}
        {/* {SearchForm(props.recipes)} */}
       {/*props.recipes.map(recipe => (RecipeCard(recipe)))*/}
    </RecipeList>
  );
}

export default RecipeCardList;
