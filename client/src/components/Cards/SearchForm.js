import React, { useState, useEffect } from "react";
import RecipeCard from './recipeCard';
import styled from 'styled-components';

const Searchbox = styled.div`
display:flex;
flex-flow: row wrap;
justify-content:space-evenly;
background: #333333;
`
const Input = styled.input`
font-family: 'Quicksand', sans-serif;
  font-size: 12px;
  padding: 10px;
  border: none;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: white;
  border: black 1px solid;
  width: 15rem;.
  margin: 8px;
  border-radius: 5px;
  color:black;
  align-self:center;
`

export default function SearchForm(props) {
  const [items, setItems] = useState(props);
    const [query, setQuery] =useState('');
    useEffect(()=>{
        console.log('Your props are:');
        console.log(props);
        const result = props.filter(item => (item.title.toLowerCase()
        .includes(query.toLowerCase())));
        setItems(result);
        console.log(`Query Ran`)
        console.log(items);
    },[query])

    const handleChange = event => {
        setQuery(event.target.value);
      };
    
    return(
        //I will neeed to alter my class names for styling
      <section>
        <div>
            <form>
                <h2>Search by Title</h2>
                <Input
                    type='text'
                    onChange={handleChange}
                    value = {query}
                    name='name'
                    tabIndex='0'
                    placeholder='search text here'
                    autoComplete='off'
                />
                <Searchbox>
                    {items.map(item => {
                      return(
                          //I will need to style this to match the required assignment
                         RecipeCard(item)
                      )  
                    })}
                </Searchbox>
            </form>
        </div>
      </section>
    );
}
