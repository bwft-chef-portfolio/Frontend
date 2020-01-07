import React, { useState } from 'react';
import axios from "axios";
import styled from "styled-components";
import ChefPort_Logo from '../images/ChefPort_Logo.png'
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import { addUser } from '../../actions';

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
            <div className="container">
                <img src={ChefPort_Logo} alt='logo' />
                
                <div className="register-form">
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
                </div>
            </div>
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