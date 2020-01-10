import React, { useState, useEffect } from "react";
import RecipeCard from './recipeCard';
import styled from 'styled-components';
import RecipeCardList from "./recipeCardList";
import Input from '../FormInputs/Input';
import Button from '../FormInputs/Button';

const Searchbox = styled.div`
display:flex;
flex-flow: row wrap;
justify-content:space-evenly;
background: #333333;
width: 100%;
`

export default function SearchForm2(props){
    const [query, setQuery] = useState('');
    const [queryResults, setQueryResults] = useState([]);

    // const defaultCardList = (el) => {
    //     if (el === null) {
    //         data.map(recipe => {
    //             <RecipeCard key={recipe.id} recipe={recipe} history={props.history} />
    //         })
    //     }
    // }

    const Searchbox = styled.div`
display:flex;
flex-flow: row wrap;
justify-content:space-evenly;
background: #333333;
`

    const filterList = (event) => {
       
        setQuery(event.target.value)
        // if (event.target.value===""){
        //         setQuery()
        //     }
        console.log(queryResults)
        console.log(props)
    }
     useEffect (() => {
         console.log('props of e.props', props)
        const data = props.recipes
        const transform = data.filter(e => e.title.toLowerCase().includes(query))
        setQueryResults(transform)
        console.log(transform)
    },[query])
    if(query === '') {
        return (
            <div>
                    <form>
                        <Input
                        type="text"
                        placeholder="Enter Recipe Name"
                        onChange={filterList}
                        value={query}/>
                    </form>              
                    <Searchbox>
                    {props.recipes.map(recipe =>
                        <RecipeCard key={recipe.id} recipe={recipe} history={props.history} />
                    )}
                    </Searchbox>
                </div>
            ); 
    }

    else return (
        <div>
                <form>
                    <Input
                    type="text"
                    placeholder="Enter Recipe Name"
                    onChange={filterList}
                    value={query}/>
                </form>             
                <Searchbox>
                {queryResults.map(recipe =>
                    <RecipeCard key={recipe.id} recipe={recipe} history={props.history} />
                )}
                </Searchbox>
        </div>
        );
}