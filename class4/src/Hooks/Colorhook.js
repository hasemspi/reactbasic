import React from "react";
import { useState } from "react";
import { Button } from "@material-ui/core";

const Colorhooks = () =>{
    const [color, setColor] = useState("Green");
    const [data,setdata]=useState({
        name:"hasem ali",
        email:"hasemspi@gmail.com",
        age:"32",
        phone:"01738292171"
    });

const blue = () =>{
    setColor("blue");
    console.log(color);
}

const Read = () =>{
    setColor("Read");
    console.log(color);
}
const Green = () =>{
    setColor("Green");
    console.log(color);
}

    return(
        <>
            <h1>Your Name is {data.name} <br/> your Email is{data.email}<br/> your age is {data.age}<br/> your phone number is {data.phone}</h1>
            <h1>Selected the color {color}</h1>
            
            <Button 
            variant="contained"
             color="primary"
              onClick={blue}
              >
            click me blue
              </Button>
            <Button 
            variant="contained"
             color="secondary"
              onClick={Read}
              >
            click me Read
              </Button>
            <Button 
            variant="contained"
            
              onClick={Green}
              >
            click me Green
              </Button>
        </>
    )

}
export default Colorhooks;