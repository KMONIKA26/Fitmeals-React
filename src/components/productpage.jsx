import "./css/productpage.css";
import "./common.css"
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";



function Productpage()
{
    let {name} = useParams();
    console.log(name,"params")

   

     let [products,setproduct] = useState([]);
      let [currentpagetitle,setcurrentpagetitle] = useState(name);
      let [typeofproduct,settypeofproduct] = useState([]);
      let[productpage,setproductpage] = useState("allproducts")

      let [sort,sortproduct] = useState([]);

     
      useEffect(()=>{
            
        async function getallprdtdata()
        {
            // https://secret-basin-20477.herokuapp.com/product
            let x = await fetch(`https://secret-basin-20477.herokuapp.com/${productpage}`);
             let y = await x.json();
             setproduct(y)
             console.log("jj")
           
        }
        getallprdtdata()

      },[productpage])

      useEffect(()=>{
            
          if(name =="allproducts")
          {
              
            setproductpage(((productpage)=> {return productpage}));
              
            
          }
          else{

        setcurrentpagetitle(name);

}
       

       },[name])
      
      useEffect(()=>{
            
        async function getdata()
        {
            let x = await fetch(`https://secret-basin-20477.herokuapp.com/products/${currentpagetitle}`);
             let y = await x.json();
             setproduct(y)
            console.log(products,"kkkkkkkk")
        }
        getdata()

      },[currentpagetitle])

      
      
     
   
        
      useEffect((()=>{

        async function getsortdata()
        {
            let x = await fetch(`https://secret-basin-20477.herokuapp.com/products/${currentpagetitle}/${sort}`);
             let y = await x.json();
             setproduct(y)
            
        }   
        getsortdata()

      }),[sort])

      



       function sortingproductvalue(e)
       {
           
            
          let {value} = e.target;


           if(value=="high")
           {
            sortproduct(-1)
           }
           if(value =="low")
           {
            sortproduct(1)
           }
           
           
       }



    return (<div id="total_product_page">
            
              <div id="title_of_products_div">
               <h1>{currentpagetitle}</h1>

            </div>

            <div id="fitclone_product_display_whole" >
                   <div className="center_of_content fitclone_product_display"  >
                <div className="product_categories_whole">
                    <div className="input_value_search"><input type="text" name="" id="" placeholder="Search" />
                       <div><IoIosSearch/></div>
                    </div>
                    <div className="product_categories">
                        <h1>Product categories</h1>
                       
                        <div  >  <span className="product_arrow_color" ><BiChevronRight/></span>Diet Plans</div>
                        <div> <span  className="product_arrow_color"><BiChevronRight/></span>Meal Plans</div>
                        <div className="products_list" >    <span className="product_arrow_color"><BiChevronRight/></span><Link to="/productpage/allproducts">Products</Link>
                            <div> <span className="product_arrow_color" ><BiChevronRight/></span><Link to="/productpage/dishes">Dishes</Link></div>
                            <div><span className="product_arrow_color" ><BiChevronRight/></span><Link to="/productpage/Fresh Bakes">Fresh Bakes</Link></div>
                            <div><span className="product_arrow_color" ><BiChevronRight/></span><Link to="/productpage/Low Calorie Sauces">  Low-Cal Sauces</Link></div>
                            <div><span className="product_arrow_color"><BiChevronRight/></span> <Link to="/productpage/Nut butters">Nut Butters</Link></div>
                            <div><span className="product_arrow_color" ><BiChevronRight/></span><Link to="/productpage/vegan sweets">Vegan Sweets</Link></div>

                        </div>
                    </div>
                    <div className="cart_total_items">
                              <h1>Cart</h1>
                    </div>


                </div>
                <div className="display_product_categories_right_whole">
                    <div className="sorting_div">
                        <div>Showing 1–6 of 10 result</div>
                        <div>Default sorting</div>
                        <div>
                            <select name="sorting_prdt" className="sorting_product" onChange={(e)=>{sortingproductvalue(e)}}>
                                <option value="">Default sorting</option>
                                <option value="low">Sort by price:low to high</option>
                                <option value="high">Sort by price:high to low</option>
                                
                            </select>
                            
                        </div>
                       
                    </div>
                    <div className="display_product_categories_right">
                        {products.map((ele)=>{ return < Eachproduct data={ele} />}) }
                                
                                  
                    </div>

                </div>
                </div>

            </div>
    </div>)
}


 function Eachproduct({data})
 {
     return (<div className="display_product_categories_right_each">
     <div> <img src={data.image} alt="" /></div>
     <div><h2>{data.title}</h2></div>
     <div><p className="description_prdt">{data.description}</p></div>
     
     <div><p>₹{data.price}</p></div>
     <div>
         <Link className="select_option_prdt-btn" to={`/SeprateProduct/:${data._id}`}  >select option</Link>
     </div>
     <div className="read_more">Read more</div>
 </div>
 )
 }

export default Productpage

