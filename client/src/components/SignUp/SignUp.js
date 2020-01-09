import React, { useState } from 'react';
import axios from "axios";
import styled from "styled-components";
import ChefPort_Logo from '../images/ChefPort_Logo.png'
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import { addUser } from '../../actions';
import Input from '../FormInputs/Input';
import Button from '../FormInputs/Button';

const LoginWrapper = styled.div `
display: flex;
flex-direction: column;
align-content: center;
align-items:center;
justify-content: center;
width: 30%;
height: 50%;
margin: 0 auto;
.img{
    margin-top:1%;
}
`

const Label = styled.label`
font-size: 20px;
padding: 10px;
margin-top:-10px;
`


class Registration extends React.Component {
    state = {
        userInfo: {
            username: '',
            password: '',
            email: '',
            location: '',
            phone: ''
        }
    };
    
    componentDidMount() {
        this.props.addUser()
    }

    handleChanges = e => {
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [e.target.name]: e.target.value
            }
        });
    };

    registration = e => {
        e.preventDefault();
        console.log(this.state.userInfo)
        this.props.addUser(this.state.userInfo)
        this.props.history.push('/login')
    }

    render() { 
        return ( 
            <LoginWrapper>
                <img src={ChefPort_Logo} alt='logo' />
                  <h1>Registration</h1>
                <form className="form-1">
                    <p>Username </p>
                    <Input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.userInfo.username}
                        onChange={this.handleChanges}
                    />
                    <p>Password </p>
                    <Input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.userInfo.password}
                        onChange={this.handleChanges}
                    />
                  
                
                
                    <p>Email </p>
                    <Input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={this.state.userInfo.email}
                        onChange={this.handleChanges}
                    />
                    <p>Location </p>
                    <Input
                        type="text"
                        name="location"
                        placeholder="location"
                        value={this.state.userInfo.location}
                        onChange={this.handleChanges}
                    />
                    <Button onClick={this.registration}>
                        Register
                    </Button>
                </form>
            </LoginWrapper>
         );
    }
}

const mapStateToProps = state => ({
    error: state.error,
    addUser: state.addUser,
    fetchingData: state.fetchingData
});

export default connect(
    mapStateToProps,
    {addUser}
)(Registration); 