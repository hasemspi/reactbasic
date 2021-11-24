import React from "react";
const Card = (props) =>{
    //destructureing props
const {callText,descpText} = props;

    return (
        <div>
            <h1>{callText}</h1>
            <h1>{descpText}</h1>
          
        </div>
    )
}
export default Card;
