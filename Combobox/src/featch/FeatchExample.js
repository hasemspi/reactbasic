import React, { useEffect, useState } from 'react';

const FeatchExample = () => {

const[showdata, setdata] = useState ([]);

useEffect(() =>{
    fetch ("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        return res.json(); 
    })
    .then((Data)=>{
        setdata(Data);
    })
}, [])





    return (
        <div>
<h1>welcom to Feacth Data</h1>
          
{
showdata.map((item,index) => {
    return (
        <>
            
               <h2 key={index}>{item.title}</h2>
               <span>{item.body}</span>
              
                
        </>
    )
  })
}
                

        
        </div>
    );
};

export default FeatchExample;