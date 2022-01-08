import React from "react";
const ListOne = ({ list }) => {
console.log(list);
    return (
        <>
        <ul>
        {list.map(item => (
            <li key={item.id}>
                <div>{item.name}</div>
                <div>{item.email}</div>
                <div>{item.father}</div>
                <div>{item.age}</div> 
                <div>{item.phone}</div> 
            </li>
        ))}
        </ul>
        </>
    )
}

export default ListOne;