import "./css/mealplan.css"
import "./css/common.css"
import { useState } from "react"

function Mealplan()
{
  
      let [state,setstate] = useState("weight")


       function Showdsiplaystautus({type})
       {
              switch(type)
              {
                 case "athletic":
                     return <Athletic_meal/>
                     case "maintenanace":
                         return <Maintenance_meal/>
                         case "keto":
                         return <Keto_meal/>

                         default : return  <Weightloss/>
              }
       }


    return (<div id="meal_plan_full_part">
        <div className="center_of_content display-flex">

               <div className="hungry_yet_meal_plan">
               <div>Hungry yet?</div>
            <div><h2>Choose your Meal Plan</h2></div>
               </div>
               <div className="button_meal_plan">
                   <div><button onClick={()=>{setstate("weight")}}>Weight Loss Meal Plan</button></div>
                   <div><button onClick={()=>{setstate("athletic")}}>Athletic Meal Plan</button></div>
                   <div><button onClick={()=>{setstate("maintenanace")}}>Maintenance Meal Plan</button></div>
                   <div><button  onClick={()=>{setstate("keto")}}>Keto Meal Plan</button></div>
               </div>
                  <Showdsiplaystautus  type={state}  />
            
            
            
            
        </div>
    </div>)
}





 function Weightloss()
 {
     return (<div className="hungry_detailed_descr" >
     <div>
         <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/weight.jpg" alt="" />
     </div>
     <div className="second_part_descr">
         <h2>Weight Loss Meal Plan</h2>
         <p>1200-1400 kcal</p>
         <p>If your aim is to lose weight in a gradual, healthy manner then this diet would meet your requirements. The meals are well balanced and consist of complex carbohydrates, lean protein, healthy fats and generous portions of fruits and vegetables which add all the essential vitamins, minerals and fibre to your diet.</p>
            <div> <button className="common_button ">viewplan</button></div>
            
     </div>
 </div>)
 }

 function Athletic_meal()
 {
     return (<div className="hungry_detailed_descr" >
     <div>
         <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/maintenance.jpg" alt="" />
     </div>
     <div className="second_part_descr">
         <h2>Athletic Meal Plan</h2>
         <p>1400-1800kcal</p>
         <p>A diet rich in protein is essential for promoting muscle growth and repair while simultaneously burning fat to ensure you stay in shape. This plan includes high protein meals for individuals who want to gain weight or build muscle. If you are a fitness enthusiast who’s looking for meals higher in calories and lean protein then we’ve got you covered.</p>
            <div> <button className="common_button ">Learn more</button></div>
            
     </div>
 </div>)
 }
 function Maintenance_meal()
 {
     return (<div className="hungry_detailed_descr" >
     <div>
         <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/athletic.jpg" alt="" />
     </div>
     <div className="second_part_descr">
         <h2>Maintenance Meal Plan</h2>
         <p>1400-1600 kcal</p>
         <p>This plan is for individuals looking for meals that will help in weight maintenance. All the meals have moderately portioned macros and micros.</p>
            <div> <button className="common_button ">viewplan</button></div>
            
     </div>
 </div>)
 }
 function Keto_meal()
 {
     return (<div className="hungry_detailed_descr" >
     <div>
         <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/keto.jpg" alt="" />
     </div>
     <div className="second_part_descr">
         <h2>Keto Meal Plan</h2>
         <p>1300-1500kcal kcal</p>
         <p>The keto diet is all about eating meals that are high in fat, consist moderate portions of protein and very low in carbs. The reduction of carbohydrates results in a metabolic process called ketosis where your body fat is then used to generate energy in the body.</p>
            <div> <button className="common_button ">Learn more</button></div>
            
     </div>
 </div>)
 }








export default Mealplan