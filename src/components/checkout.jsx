
import { useEffect, useState } from "react"
import "./checkout.css"
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import axios from "axios"
export const CheckOut=()=>{
    const navigate=useNavigate()
    const tokenkey=useSelector((store)=> store.token.token)
    console.log(tokenkey)
    const [cartdata,setcartdata]=useState([])
    const id=tokenkey
    let sum=0;
    cartdata.forEach((e)=> sum+=(e.price*e.nop))
    useEffect(()=>{
        getData()
    },[])
    const getData=()=>{
 
        axios.get(`https://secret-basin-20477.herokuapp.com/cart/${id}`)
        .then(function (response) {
         
          // handle success
          console.log(response.data);
         
          setcartdata(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        })
    }
   
    return <div className="maindiv">
       <div className="firstdiv"></div>
       <div className="secdiv">
           <h1>Checkout</h1>
       </div>
       
          <div className="tirtydiv">
             <div className="returndiv">
                 <div>Returning customer? Click here to login</div>
                 <div>Have a coupon? Click here to enter your code</div>
             </div>
           <div className="billing">
               <div>
                   <h1 style={{color:"darkslategray",marginLeft:"20px"}}>Billing details</h1>
                   <div className="Namediv">
                       <div>
                           <p style={{fontWeight:"700",color:"grey" ,marginLeft:"30px"}}>First name *</p>
                           <input style={{border:"solid 2px grey",borderRadius:"50px"}} type="text" />
                       </div>
                       <div>
                           <p style={{fontWeight:"700",color:"grey",marginLeft:"30px"}}>Last name *</p>
                           <input style={{border:"solid 2px grey",borderRadius:"50px"}} type="text"  id="" />
                       </div>
                   </div>
                   <div className="companydiv">
                       <p style={{fontWeight:"700",color:"grey",marginLeft:"30px"}}>Company name (optional)</p>
                       <input style={{border:"solid 2px grey",borderRadius:"50px"}} type="text" />
                   </div>
                   <div>
                       <p style={{fontWeight:"700",color:"grey",marginLeft:"30px"}}>Country / Region *</p>
                       <h2>India</h2>
                       <p style={{fontWeight:"700",color:"grey",marginLeft:"30px"}}>Street address *</p>
                       <input style={{border:"solid 2px grey",borderRadius:"50px"}} type="text"  />
                       <input style={{border:"solid 2px grey",borderRadius:"50px"}} type="text"  />
                   </div>
                   <div>
                       <p style={{fontWeight:"700",color:"grey",borderRadius:"50px",marginLeft:"30px"}}>Town / City *</p>
                       <input style={{border:"solid 2px grey",borderRadius:"50px"}} type="text" />
                       <p style={{fontWeight:"700",color:"grey",borderRadius:"50px",marginLeft:"30px"}}>State *</p>
                       <input  style={{border:"solid 2px grey",borderRadius:"50px"}} type="text" />
                       <p style={{fontWeight:"700",color:"grey",borderRadius:"50px",marginLeft:"30px"}}>PIN *</p>
                       <input style={{border:"solid 2px grey",borderRadius:"50px"}} type="text" />
                       <p style={{fontWeight:"700",color:"grey",marginLeft:"30px"}}>Phone *</p>
                       <input style={{border:"solid 2px grey",borderRadius:"50px"}} type="text" />
                       <p style={{fontWeight:"700",color:"grey",borderRadius:"50px",marginLeft:"30px"}}>Email address *</p>
                       <input style={{border:"solid 2px grey",borderRadius:"50px"}} type="text" />
                   </div>
               </div>
               <div>
                   <div className="shipdiffre">
                       <input type="checkbox" />
                       <p>Ship to a different address?</p>
                   </div>
                   <div className="eryju">
                       <p>Order notes (optional)</p>
                       <textarea placeholder="Notes about your order, e.g special notes for delivery" name="" id="" cols="30" rows="10"></textarea>
                   </div>
               </div>
           </div>
           <div className="purcaserdiv">
<div>
    <h1  style={{color:"darkslategray"}}>Your order</h1>
    <div>
        <div>Product</div>
        <div>Subtotal</div>
    </div>
    {
      cartdata.map((e)=>{
          return <div className="newlyproduct">
              <div> <div style={{marginLeft:"20px"}}> {e.title} x {e.nop}</div>
              <h4 style={{marginLeft:"20px"}}>Quantity:{e.quantity} g</h4>
                </div>
              <div >
                <p style={{marginLeft:"20px"}}> ₹{(e.price*e.nop).toFixed(2)}</p> 
              </div>
          </div>
      })  
    }
    <div className="sumof">
        <div> <div>  <p>Subtotal </p> </div> <div>₹{sum.toFixed(2)}</div> </div>
        <div>  <div> <p>Shipping </p></div> <div> Flat rate: ₹50.00 </div>  </div>
        <div>  <div> <p>Total </p></div> <div>₹{(sum+50).toFixed(2)} </div> </div>
    </div>

</div>

           </div>
           <div className="finaltridiv">
<div>
    <div> <input defaultChecked={true} type="radio" /> <p>Cash on Delivery: Pay on the first day of your meals.</p> </div>
    <div><input defaultChecked={false} type="radio" /> <p>PayUmoney .</p> </div>
    <div><input type="checkbox" /><p>I have read and agree to the website terms and conditions *.</p> </div>
    <button onClick={()=>{
        alert("Order sucessfully placed")
navigate("/")
    }} className="tygdfy">Place order</button>
</div>
</div>
                  </div>
       
       
    </div>
}