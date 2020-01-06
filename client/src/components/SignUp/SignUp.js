import React, { useState } from 'react';
import axios from "axios";
import styled from "styled-components";
import ChefPort_Logo from '../images/ChefPort_Logo.png'

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
  text-transform: uppercase;
  color:black;
  }
`;

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

const SignUp = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        password: "",
        email: "",
        number: ""
    })
    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault(
            axios.post("https://reqres.in/api/users/", user)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error.response)
                })
        )
    }

    return (
        <div className='container'>
            <img src={ChefPort_Logo} alt='logo' />
            <h2>Your Information</h2>
            <form className='customForm' onSubmit={handleSubmit}>
                
                <Input placeholder="Full Name" type="text" name="name" value={user.name} onChange={handleChange} required />

                <Input placeholder="User Name" type="text" name="username" value={user.username} onChange={handleChange} required />

                <Input placeholder="Phone Number" type="text" name="number" value={user.number} onChange={handleChange} required />

                <Input placeholder="Email" type="text" name="email" value={user.email} onChange={handleChange} required />

                <Input placeholder="Create Password" type="password" name="password" value={user.password} onChange={handleChange} required />

                <Button type="submit">Submit</Button>
            </form>
            <p>By signing up, you agree to our Terms and Privacy Policy</p>
        </div>
    )
}

export default SignUp