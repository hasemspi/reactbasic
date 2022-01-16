import React, { useEffect, useState } from 'react';

import Button from '@mui/material/Button';

const UseEffectExample = () => {

const [count,setcount]= useState(0)

const clickHandeler = () =>{
    setcount((count) => count +1);
}

useEffect(()=>{
    console.log("useEffect");
},[])




    return (
        <div>
          {console.log("rendering")}
            <p>Count: {count}</p>
            <Button variant="contained" onClick={clickHandeler}>+</Button>
        </div>
    );
};

export default UseEffectExample;