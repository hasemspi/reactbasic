import React from 'react'
const hello = () =>{
    return <>
        name:"hello man";
    </>
}
const Hello = () => {



    return (
        <div>
            <h2>Hello man</h2>
            <button onClick="hello">click me</button>
        </div>
    )
}

export default Hello;