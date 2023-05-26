import React from "react";

const Footer = () =>{

    const date = new Date()
    const month =  date.getMonth()
    const year = date.getFullYear()

    return(<>
        {`${month},${year} &#10084; Jatin Bhargava`} 
    </>)
}

export default Footer