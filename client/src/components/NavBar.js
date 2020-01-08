import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavLinks =styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom:black 1px solid;
    margin:0% 0% 0% 0%;
    padding:1%;
    width: 98%;
    max-width: 100%; 
    background:#333333;
    a{
        color:white;
        &:link{
            text-decoration: none;
        }
        &:visited{
            text-decoration: none;
    }
`
// background: #333333;
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='container-nav'>
                <nav className='nav-bar'>
                    <div className='nav-logo'>
                        {/* <a href='#'>ChefPort</a> */}
                    </div>
                    <NavLinks>
                        <Link to='/recipes-list'>Recipes</Link>
                        <Link to='/login'>Login</Link>
                        <Link to='/registration'>Registration</Link>
                    </NavLinks>
                </nav>
            </div>
        );
    }
} 

export default NavBar;