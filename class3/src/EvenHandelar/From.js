import React, { useState } from 'react'

const From = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
      });
      const { name, email, password } = user;
    
      const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };

const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
  }

    return (
        <div>
            <h3>Registration</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <div>
                    <input 
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange= {handleChange} 
                    require 
                       />

                       
                </div>
                <label htmlFor="email">Email: </label>
                <div>
                    <input type="text" name="email" value={email} id="email" onChange={handleChange} require></input>
                </div>
                <label htmlFor="password">Password: </label>
                <div>
                    <input type="password" name="password" value={password} id="password" onChange={handleChange} require></input>
                </div>
                <br/>
                <div>
                <button type="submit">Submit</button>
                </div>
                </form>
        </div>
    )
}

export default From;