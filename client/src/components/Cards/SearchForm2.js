import React, { useState, useEffect } from "react";
import RecipeCard from './recipeCard';
import styled from 'styled-components';
import RecipeCardList from "./recipeCardList";


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
                        <input
                        type="text"
                        placeholder="Enter Tool Name"
                        onChange={filterList}
                        value={query}/>
                    </form>              
                    <div>
                    {props.recipes.map(recipe =>
                        <RecipeCard key={recipe.id} recipe={recipe} history={props.history} />
                    )}
                    </div>
                </div>
            ); 
    }

    else return (
        <div>
                <form>
                    <input
                    type="text"
                    placeholder="Enter Tool Name"
                    onChange={filterList}
                    value={query}/>
                </form>
                <button type="submit">Search</button>              
                <div>
                {queryResults.map(recipe =>
                    <RecipeCard key={recipe.id} recipe={recipe} history={props.history} />
                )}
                </div>
            </div>
        );
}