import React from "react";

const HelloProps = (props) => {
    console.log(props.bio);
    return (
        <>
        <h1>{props.bio.name}</h1>
       </>
    )
   
}
export default HelloProps;

