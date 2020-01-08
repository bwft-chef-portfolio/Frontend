import React, {useState} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {login} from '../../actions/index';
import styled from 'styled-components';

/* 
    The purpose of this component is to have a form that asks for the users user name, and password
    and submits.
*/
const LoginWrapper = styled.div `
display: flex;
width: 30%;
height: 50%;
margin: 0 auto;
justify-content: center;
padding:1%;
`


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
  width: 15rem;
  margin: 8px;
  border-radius: 5px;
  color:black;
`


const Button = styled.button`
font-family: 'Lato', sans-serif;
width:12rem;
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

class Login extends React.Component {
    //States
    state = {
            username:'',
            password:''
        }
    


        login = e => {
            e.preventDefault();
            this.props.login(this.state.username, this.state.password).then(res => {
                if (res) {
                    this.props.history.push('/protected');
                }
            });
        };

    textFormHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
    return(
        <LoginWrapper>
            <form>
                <label htmlFor="username">Username:</label>
                <Input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="username"
                    onChange={this.textFormHandler}
                    required
                    minLength="5"
                    maxLength="15"
                    size= "16"
                    value={this.state.username}
                />

                <label htmlFor="password">Password:</label>
                <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    onChange={this.textFormHandler}
                    required
                    minLength="5"
                    maxLength="20"
                    size= "16"
                    value={this.state.password}
                />
                <Button onClick={this.login} type="submit">Login</Button>
            </form>
        </LoginWrapper>
    )

}
}


const mapStateToProps = state => {
    return {
        isLoadingLOGIN: state.isLoadingLOGIN,
        successLOGIN: state.successLOGIN,
        user: state.user
    };
};
export default withRouter(
    connect(
        mapStateToProps,
        {login}
    )(Login)
);