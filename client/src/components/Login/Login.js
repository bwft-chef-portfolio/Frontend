import React, {useState} from 'react';


/* 
    The purpose of this component is to have a form that asks for the users user name, and password
    and submits.
*/

const Login = (props) => {
    //States
    const [user, setUser] =useState({
        username:'',
        password:'',
        role: 'user'
    })

    const handleChanges = el => {
        console.log([el.target.name])
        console.log(el.target)
        setUser({
            ...user,
            [el.target.name]:el.target.value
        })
    }

    const submitForm = el => {
        el.preventDefault();
        //user action preformed here
        //props.addTeamMember(person);
        console.log(`The username is: ${user.username} and password is: ${user.password}`)
        //This may need to not be reset for final
        setUser({username:'', password:'', role:'user'})
        console.log(`The username is: ${user.username} and password is: ${user.password}`)
    }

    return(
        <form onSubmit={submitForm}>
            <label htmlFor="username">Username:</label>
            <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            onChange={handleChanges}
            required
            minLength="5"
            maxLength="15"
            size= "16"
            value={user.username}
            />

        <label htmlFor="password">Password:</label>
        <input
        type="text"
        id="password"
        name="password"
        placeholder="password"
        onChange={handleChanges}
        required
        minLength="5"
        maxLength="20"
        size= "16"
        value={user.password}
        />
        <button type="submit">Submit</button>
        </form>
    )

}
export default Login;