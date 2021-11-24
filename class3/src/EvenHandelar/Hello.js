import React from 'react'
import { useState } from 'react'

const Hello = () => {
const [Count,setCount] = useState(1)

const clickHeandelar = () => {
    setCount(Count+1);
}
    return (
        <div>
             <p>Increment {Count}</p>
             <button onClick={clickHeandelar}>Increament</button>
        </div>
    )
}

export default Hello;