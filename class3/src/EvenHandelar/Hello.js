import React from 'react'
import { useState } from 'react'

const Hello = () => {
const [Count,setCount] = useState(1)

const IncreHeandelar = () => {
    setCount(Count +1);
}
const DecreHeandelar = () => {
    setCount(Count -1);
}
    return (
        <div>
             <p>Increment {Count}</p>
             <button onClick={IncreHeandelar}>Increament</button>
             <button onClick={DecreHeandelar}>Drecss</button>
        </div>
    )
}

export default Hello;