import React, {useState} from 'react';
import { connect } from 'react-redux';
import {Link, withRouter, Redirect} from 'react-router-dom';
import {login} from '../../actions/index';
import styled from 'styled-components';
import Button from '../FormInputs/Button';
import Input from '../FormInputs/Input';
import Select from '../FormInputs/Select';
import Textarea from '../FormInputs/TextArea';
/* 
    The purpose of this component is to have a form that asks for the users user name, and password
    and submits.
*/
const LoginWrapper = styled.div `
display: flex;
width: 30%;
height: 50%;
margin: 0 auto;
justify-content: space-evenly;
padding:1%;
`




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
                    this.props.history.push(`/user-recipes-list`);
                }
            });
        };

        signup = el =>{
            el.preventDefault();
            this.props.history.push('/registration');
        }
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
                <div><Button onClick={this.login} type="submit">Login</Button>
                <Button onClick= {this.signup} >Sign Up</Button>
                </div>
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