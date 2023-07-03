import React from "react";
import { useState } from "react";

export const Register = (props) => {

    const[email,setEmail] = useState('');
        const[pass,setPass] = useState('');
        const [name,setName] = useState('');

        const handleSubmit= (e) => {
            e.preventDefault();
            console.log(email);
    
        }

        return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input value = {name} name="name" id="name" placeholder="Full Name" />

            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="abc@xyz.com" id="email" name="email"/>

            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="abc@xyz.com" id="password" name="password"/>
            
            <button type="Submit"> Login </button>
        </form>
        <button onClick={() => props.onFormSwitch('login')}> Already have an Account? Login</button>

        </>
        )

}