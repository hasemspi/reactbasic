import React from 'react'
import { useState } from 'react'
const MyState = () => {
const [state, setState] = useState({
 first: {
     name:"hasem",
     age:25,
     add:"jamalpur"
 },
 second: "Ali",
 age:30

});
    
    return (
        <div>
           <h1>{state.first.name}</h1>
           <h2>{state.second}</h2>
           <p>{state.age}</p>
        </div>
    )
}

export default MyState;