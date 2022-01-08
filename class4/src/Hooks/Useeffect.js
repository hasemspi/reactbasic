import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { ListItem } from '@material-ui/core'

const Useeffect = () => {
    const [name, setName] = useState([])
 
    useEffect(() => {
        Axios.get('https://6167cd8dba841a001727c409.mockapi.io/api/dispenser')
        .then(response => {
            setName(response.data)
            console.log(response.data);
        })
    }, [])
    console.log(name.firstName);
    return (
        <div>
            {name.map(name=>{
                <p>{name.firstName}</p>
            })}
        </div>
    )
}
export default Useeffect;