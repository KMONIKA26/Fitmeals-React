import React, { useState } from "react";
import { questions } from "./api";
import MyAccordion from "./MyAccordion"
import "./accordion.css"

const Accordion = () =>{
    const [data,setData] = useState(questions)
    return (
        <>
       
            
        {
            data.map((curElem)=>{
                return <MyAccordion  key={curElem.id} {...curElem}/>
            })
        }
        
        </>
    )
}


export default Accordion