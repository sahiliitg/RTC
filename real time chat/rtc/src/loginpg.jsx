import React from "react";
import { useState } from "react";

const Login = (props) => {
    const[email,setEmail] = useState('');
    const[pass,setPass] = useState('');

    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(email);

    }




    return ( 
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="abc@xyz.com" id="email" name="email"/>

            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="abc@xyz.com" id="password" name="password"/>
            
            <button type="Submit"> Login </button>
        </form>
        <button onClick={() =>  props.onFormSwitch('register')}> Don't have an Account? Register</button>

        </>

     );
}

export default Login;