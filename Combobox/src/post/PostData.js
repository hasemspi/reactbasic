import React, { useEffect, useState } from 'react';



const PostData = () => {
const [datashow,setdata] = useState([]);

useEffect(()=>{
    fetch("https://6167cd8dba841a001727c409.mockapi.io/api/countries")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        setdata(data);
    })
},[])

    return (
        <div>
            <h1>Show data post</h1>
            {datashow.slice(0 ,2).map((item, index)=>{
                return(
                    <>
                    <p key={index.id}></p>
                    <p>{item.title}</p>
                    <span>{item.description}</span>
                    </>
                )
            })}
        </div>
    );
};

export default PostData;