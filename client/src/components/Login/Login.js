import React, {useState} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {login} from '../../actions/index';


/* 
    The purpose of this component is to have a form that asks for the users user name, and password
    and submits.
*/

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
        <form>
            <label htmlFor="username">Username:</label>
            <input
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
        <input
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
        <button onClick={this.login} type="submit">Submit</button>
        </form>
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