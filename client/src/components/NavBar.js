import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.div`
    display: flex;
    flex-direction: row;

`

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
                    <div className='nav-links'>
                        <Link to='/recipes-list'>Recipes</Link>
                        <Link to='/login'>Login</Link>
                        <Link to='/registration'>Registration</Link>
                    </div>
                </nav>
            </div>
        );
    }
} 

export default NavBar;