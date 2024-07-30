import Faqback from "./Faqback"
import { testi } from "./testi"
import Testimony from "./Testimony"
import React from "react"
import "./test.css"

import { useState } from "react"
const Test = () =>{
 const [data,setData] = useState(testi)

    return (
          <>
          <Faqback head={"Testimonials"}></Faqback>
        <div className="outer">

        {
            data.map((curElem)=>{
                return <Testimony  key={curElem.id} {...curElem}/>
            })
        }
        </div>
         
          
          
          </>
    )
}

export default Test