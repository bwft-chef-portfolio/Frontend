import React, {useState, useEffect} from 'react';
import {Link, withRouter, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import RecipeCard from './recipeCard';

//Purpose of this component is to display a single card

const DisplayCard = (props) => {
    /*
    const [cardId, setCardID] = useState(`${this.props.match.params.id}`);
    const [card, setCard]=({});
    */
    // useEffect(()=>{
    //     console.log("Axios activated")
    //     axios.get(`https://backendchefls.herokuapp.com/api/recipes/${props.match.params.id}/recipe`)
    //     .then(res =>{
    //       console.log(res);
    //       //console.log(card);
    //     })
    //     .catch(err=>{
    //       console.log(`Error:${err}`);
    //     });
    // },[])
    console.log(`Display Card loaded`)
    console.log(props)

    return(
        <>
            <h1>Awesome!</h1>
            <p>WOOOOOOOOOOOOOOOORDS</p>
        </>
    );
       
        //Link to Recipe List Goes Here
    
}
export default DisplayCard;
//props.history.push(`/edit-item:${props.id}`);