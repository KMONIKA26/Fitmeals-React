import { FaSearch ,FaShoppingBag,TiLocation} from 'react-icons/fa';
import axios from 'axios';
import website_icon from "../assets/images/website-icon.png"
import { IoLocationOutline,IoSearchOutline } from "react-icons/io5";
import { addToken } from "../combineReducers/Logins/action";
import { MdMailOutline ,MdPhoneInTalk} from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
import "./common.css"

import "./css/header.css"
import Mealmodel from './model/mealmodel';
import { Productsmodel } from './model/mealmodel';
import { Aboutmodel } from './model/mealmodel';
import { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import { useDispatch,useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
function Header_fit_meals()
{
     
     let [search,setsearch]= useState(false)
        console.log(search)
           
     function Searchinput()
     {
         return (<div className='searchinput'><input placeholder='Search' name= "search" /><span onClick={()=>{setsearch(!Searchinput)}} >&#10005;</span></div>)
     }

     const tokenkey=useSelector((store)=>
     store.token.token
 )  
 let id=tokenkey    
 console.log(tokenkey ,"6969") 
 const navigate=useNavigate(); 
const dispatch=useDispatch()
const [bag,setbag]=useState([]);

useEffect(()=>{
    axios.get(`https://secret-basin-20477.herokuapp.com/cart/${id}`)
    .then(function (response) {
     
      // handle success
      console.log(response.data);
     
      setbag(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    })
})
    return (
      <div id='fit_meals_total_header_part'>
    <div className=''>
           
           <div id="fit_meals_header_row1">
                   <div className='center_of_content'>
                 <div className="fit_meals_header_row1_about_section">
                                
                               <div ><span className='color_green '> <  IoLocationOutline/></span> Food delivery only in Hyderabad</div>
                               <div><span className='color_green icon_size'> <  MdPhoneInTalk/></span> 9100347480</div>
                 <div><span className='color_green icon_size'> <  MdMailOutline/></span> fitmealsindia@gmail.com</div>


                 </div>
                 
                 <div  className="fit_meals_header_row1_login-section" >
                            <div onClick={()=>{setsearch(!search)}}> <IoSearchOutline/></div>  
                       {tokenkey==null ?<div > <Link to="/loginpage"><img src="data:image/png;base64,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" alt="" /></Link> </div>:
                       <button onClick={()=>{
                        dispatch(addToken(null))
                        alert("Thanks !")
                        navigate("/")
                       }}>Log Out</button> } 
                        <div className='cartcount' ><Link to="/cartpage"><FaShoppingBag/>{bag.length}</Link> </div>
                        <div className='seacrh_input_fitclone'>{search?<Searchinput/>:""}</div>
                         
                 </div>
                 </div>

           </div>
           <div id='fit_meals_header_row2'>
                 <div>
                
                     <Link to="/"><img  src={website_icon} alt="" /></Link> 
                 </div>
                 <div className='fit_meals_header_row2_home_about'>
                     <div className='static_green' ><Link style={{color:"green"}} to="/" >Home</Link>
                       
                     </div>
                     <div className='green_hover' >

                     {<Mealmodel/>}
                     </div>
                     <div className='green_hover'><Link to ="/healthcoaching">Health coaching</Link></div>
                     <div className='green_hover'>{<Productsmodel/>}</div>
                     <div className='green_hover'><Link to={"bloghome"}>Blog</Link></div>
                     <div className='green_hover'>
                         {<Aboutmodel/>}
                     </div>
                 </div>
                 <div>
                     <div><button className='fitmeals_call_button'>Call:9100347480</button></div>
                 </div>
           </div>
             

    </div></div>)
}





export default Header_fit_meals