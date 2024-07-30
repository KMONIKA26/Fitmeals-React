import "./model.css";

import { BiChevronRight } from "react-icons/bi";


import { Link } from "react-router-dom";
function Mealmodel()
{
    return (<div className="meal_plans_model">Meal Plans<span className="arrowleft_shown"><BiChevronRight/></span> 

          <div className="meals_plan_hover">
              <div>
              <div className="link_to_prdt_page"><Link to="/weightlossmealplan">Weight Loss Meal Plan</Link></div>
              <div className="link_to_prdt_page"><Link to="/maintenancemealplan">Maintanance Meal Plan</Link></div>
              <div className="link_to_prdt_page"><Link to="/athleticmealplan">Atheletic Meal Plan</Link></div>
              <div className="link_to_prdt_page"><Link to="/Ketomealplan"> Keto Meal Plan</Link></div>
              <div className="link_to_prdt_page"><Link to="/">Transformation challenges</Link></div>
              </div>
          </div>
    </div>)
}

function Productsmodel()
{
  
    return (<div className="meal_plans_model">Products<span className="arrowleft_shown"><BiChevronRight/></span>

          <div className="meals_plan_hover">
              <div >
              <div className="link_to_prdt_page"><Link to="/productpage/vegan sweets">Vegan Sweets</Link></div>
              <div className="link_to_prdt_page"><Link to="/productpage/Low Calorie Sauces">  Low-Cal Sauces</Link></div>
              <div className="link_to_prdt_page"> <Link to="/productpage/Nut butters">Nut Butters</Link></div>
              <div className="link_to_prdt_page"><Link to="/productpage/Fresh Bakes">Fresh Bakes</Link></div>
            
              
                    
              
              </div>
          </div>
    </div>)
}

function Aboutmodel()
{
    return (
    
    <div className="meal_plans_model">About Us<span className="arrowleft_shown"><BiChevronRight/></span>

          <div className="meals_plan_hover">
              <div>
              <div><button> <Link  to={"/ourstory"}>Our story</Link></button></div>
              <div><button><Link to={"/faq"}>FAQ</Link></button></div>
              <div><button><Link to={"/test"}>Testimonals</Link></button></div>
              </div>
          </div>
    </div>)
}


export {Productsmodel,Aboutmodel}

export default Mealmodel