import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color:white;
    .nav-links{
        padding:1%;
    }
`

const NavLinks =styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color:white;
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
            <Navigation className='container-nav'>
                <nav className='nav-bar'>
                    <div className='nav-logo'>
                        {/* <a href='#'>ChefPort</a> */}
                    </div>
                    <NavLinks>
                        <Link to='/recipes'>Recipes</Link>
                        <Link to='/login'>Login</Link>
                        <Link to='/registration'>Registration</Link>
                    </NavLinks>
                </nav>
            </Navigation>
        );
    }
} 

export default NavBar;