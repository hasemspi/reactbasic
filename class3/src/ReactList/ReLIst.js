import React from 'react'
import ListOne from './Test/ListOne';
const ReList = () => {

    const mylist = [
        {
            id:1,
            name:"hasem",
            father:"Fazol",
            email:"hasemspi@gmail.com",
            age:"25",
            phone:"01738292171"
        },
        {
            id:2,
            name:"hasem ali",
            email:"hasemspi@gmail.com",
            age:"25",
            phone:"01738292171"
        },
        {
            id:3,
            name:"Abul hasem",
            email:"hasemspi@gmail.com",
            age:"25",
            phone:"01738292171"
        }
    ];

    return (
        <>
        <ListOne list={mylist}/>    
        </>
    );
    
}

export default ReList;