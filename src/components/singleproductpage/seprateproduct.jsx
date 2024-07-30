import { useEffect, useState } from "react"
import "./seprateproduct.css"
import { useNavigate } from "react-router-dom";
import { useParams,Link } from "react-router-dom";
import axios from "axios"
import { useDispatch,useSelector } from "react-redux";
import { addToken } from "../../combineReducers/Logins/action";
import styled from "styled-components"
const MainImage=styled.div`
    background-image: ${(props) => `url(${props.maindata})`};
    
`
export const SeprateProduct=()=>{
const dispatch=useDispatch();

    const tokenkey=useSelector((store)=>
    store.token.token
)
const navigate=useNavigate();
    const [data,setData]=useState({})
    let {id} = useParams();
    console.log(id)
    id = id.split(":")[1];
    console.log(id)
    const [procounter,setProcounter]=useState(1)
    useEffect(()=>{
        console.log(procounter)
    },[procounter])


    useEffect(()=>{
            
        axios.get(`https://secret-basin-20477.herokuapp.com/singleprdt/${id}`)
  .then(function (response) {
    setData(response.data)
    // handle success
    console.log(response.data);
    setData(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  })

    },[])
    
    
    

const [relateproduct,setRelateproduct]=useState([
    {
        "title":"Almond Butter",
        "image":"https://www.fitmeals.co.in/wp-content/uploads/2021/05/1.jpg",
        "price":800,
        "description":"Delectable almond butter prepared in-house, serves as the perfect guilt-free accompaniment with your healthy snacks and smoothies.",
        "quantity":500,
        "categories":["Nut butters","Products"],
        "subcategories":"Nut butters"
    },
    {
        "title":"Arrabiata Sauce",
        "image":"https://www.fitmeals.co.in/wp-content/uploads/2021/06/arrabbiata-sauce-680x900-1.jpg",
        "price":220,
        "description":"Fitmeals Arrabbiata sauce is a delicious blend of spicy chillies, tomatoes and authentic Italian ingredients.",
        "quantity":500,
        "categories":["Low Calorie Sauces","Products"] ,
        "subcategories":"Low Calorie Sauces"
    },
    {
        "title":"Almond Date Chocolate",
        "image":"https://www.fitmeals.co.in/wp-content/uploads/2021/06/25.jpg",
        "price":1200,
        "description":"Delicious Dates stuffed with a Almonds and covered in dark chocolate. With the finest golden almonds at the core, surrounded by irresistible luscious dates and enveloped with soft and delectable chocolate, combine to give you three layers of happiness.",
        "quantity":500,
        "categories":["vegan Sweets","Products"],
        "subcategories":"vegan sweets" 
    }
])

    return <div className="maindiv">
<MainImage maindata={data.image} className="firstdiv">
    <h1>{data.title}</h1>
</MainImage>
<div className="seconddiv">
    <div>
        <img src={data.image} alt="" />
    </div>
    <div>
        <p>₹{data.price}</p>
        <p>{data.description}</p>
             <h2>About This Product</h2> 
             
             <p>Quantity</p>
             <div className="radio_check"> <input type="radio" defaultChecked="ture"/>  {data.quantity} gm</div>
             <div className="maya"><input min={1} onChange={(e)=>{
                
                 setProcounter(e.target.value)
             }} type="number" defaultValue={1} className="increaseProduct" /><button  onClick={()=>{
                 console.log(tokenkey)
                if(tokenkey==null){
navigate("/loginpage")
                }else{
                    alert("Product Added to cart")
                    axios.post('https://secret-basin-20477.herokuapp.com/cart', {
                        image:data.image ,
                        title:data.title,
                        price:data.price ,
                        description:data.description ,
                        about_product:data.subcategories,
                        quantity:data.quantity ,
                        categories:data.categories ,
                        subcategories:data.subcategories ,
                        userid:tokenkey,
                        nop:procounter
                      })
                      .then(function (response) {
                        console.log(response.data);
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                }
            }} className="addtocartbutt">Add to cart</button ></div>
             <p>Categories:{data.categories}, Products</p>    
    </div>

</div>
<div className="thirddiv">
    <div><h2 ><span style={{color:"#515151"}}>Description</span><span style={{color:"#515151"}}>Reviews (0)</span></h2></div>
</div>
<div className="mainmedea">
<div className="fourthdiv">
    <p>
   {data.description}
    </p>
    <p>About This Product</p>
    <span>
    <p style={{color:"#515151"}}>Gluten Free</p>
    <p style={{color:"#515151"}}>Soy Free</p>
    </span>
</div>
</div>

<div className="fifthdiver">
<h2>Related products</h2>
<div>
   {
     relateproduct.map((e)=>{
         return <div className="fifthdiver_static">
             <div>
                 <img src={e.image} alt="" />
             </div>
             <h2>{e.title}</h2>
             <h2>₹{e.price.toFixed(2)}</h2>
             <button >Select options</button>
             <p>Read more</p>
         </div>
     })  
   }
   
</div>
</div>
    </div>
}
