
import { useEffect, useState } from "react"
import "./productcart.css"
import tractor from "../mealplans/pictures/tractor.jpg"
import {useSelector} from "react-redux"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export const ProductCart=()=>{
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
    const valueIncrease=(e,x)=>{

        axios.patch(`https://secret-basin-20477.herokuapp.com/cart/${e.target.value}/${x}`)
          .then(function (response) {
            console.log(response.data);
            getData()
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    const deleteProduct=(g)=>{

        axios.delete(`https://secret-basin-20477.herokuapp.com/cart/${g}`)
          .then(function (response) {
            console.log(response.data);
            getData();
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return <div className="maindiv">
       <div className="firstdiv"></div>
       <div className="secdiv">
           <h1>Cart</h1>
       </div>
       
          <div className="thirddiv">
              { tokenkey==null|| cartdata.length==0 ? <div  className="emtydiv">Empty cart</div> : <div>
               <div>
                   <div>Product</div>
                   <div>Price</div>
                   <div>Quantity</div>
                   <div>Subtotal</div>
               </div>
           
             
             {}
              {cartdata.map((x)=>{
                  return  <div className="productsdiv">
           <div onClick={()=>{
               deleteProduct(x._id)
           }}>x</div>
           <div><img src={x.image} alt="" /></div>
           <div>
           
               <h4 className="hoir">{x.title}</h4>
            <h4 className="hoir" style={{color:"black"}}>Quatity: <span style={{color:"black"}} className="smaltext">{x.quantity} g</span></h4>
             
           </div>
           <div>₹{x.price.toFixed(2)}</div>
           <div>
               <input min={1} onChange={(e)=>{
valueIncrease(e,x._id)
               }} defaultValue={x.nop} className="increaseProduct" type="number" name="" id="" />
           </div>
           <div>
               <h4>
                   ₹{((x.nop*x.price).toFixed(2)).toLocaleString()}
               </h4>
           </div>
                  </div>
              })   
            }
           <div className="coupans">
               <input type="text" name="" id="" placeholder="Coupon code" />
               <button>Apply Coupon</button>
               <h4 className="ghut">UPDATE CART</h4>
           </div>
           <div className="finaldiv">
               <div>
                   <div>
                       <div>Subtotal</div>
                       <div><p>₹{(sum).toLocaleString()} </p></div>
                   </div>
                   <div>
                       <div>Shipping</div>
                       <div className="texteditor">
                            <p>Flat rate: ₹50.00</p>
                     
                     <p>  <span>Shipping to</span> Telangana.</p>
                     
                     <div className="tractor">
                     <p className="opk"> CHANGE ADDRESS</p>
                     <img  src={tractor} alt="" />
                     </div>
                     
           </div>
                   </div>
                   <div>
                       <div>Total</div>
                       <div><p>₹{(sum+50).toLocaleString()}</p></div>
                   </div>
                   <button onClick={()=>{
navigate("/checkout")
                   }} className="butonj">Proceed to checkout</button>
               </div>
           </div>
           </div> }
          
           
                  </div>
       
       
    </div>
}