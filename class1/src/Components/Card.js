import React from 'react'

const Card = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.name}{props.address}</h1>
        </div>
    )
}

export default Card