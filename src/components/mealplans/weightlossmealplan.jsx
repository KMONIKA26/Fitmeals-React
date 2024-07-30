import styled from "styled-components"

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import got1 from "./pictures/got1.png"
import got2 from "./pictures/got2.png"
import got3 from "./pictures/got3.png"
import got4 from "./pictures/got4.png"
import tick from "./pictures/tick.jpg"
import "./autoplay.css"
import gito from "./pictures/getintouch.jpg"
const MainDiv=styled.div`

    width:100%;
    height:auto;
    
   
    &>div:nth-child(1){

        width:100%;
        height:380px;
         position:fixed;
         z-index:-1;   
        &>img{
            width:100%;
            height:100%;
        }
    }
    &>div:nth-child(2){
        width:100%;
        height:380px;
        display:flex;
        background-color:transparent;
        justify-content:center;
        align-items:center;
        font-size:26px;
          
    }
    &>div:nth-child(3){
        width:100%;
        height:500px;
        background-color:white;
        padding-top:95px;
       
        &>div{
         
            width:100%;
            height:500px;
            background-color:#f3f5ed;
            display:flex;
            justify-content:center;
            align-items:center;
            &>div:nth-child(1){
                
            width:35%;
            display:flex;
            flex-direction:column;
            margin-left:15%;
&>p{
  font-size:16px;
  text-align:left; 
  line-height: 2em 
}
&>button{
    display: inline-block;
    padding: 8px 20px;
    text-align: center;
    background: #e91e63;
    color: #fff;
    border-radius: 3px;
    width:180px;
    height:48px;
    border:none;
}
}
&>div:nth-child(2){
width:40%;
height:100%;
&>h6{
  font-family: 'Sacramento', cursive;
    font-weight: 400;
    font-size: 40px;
   
}
}

        }
    }

`
const SecondDiv=styled.div`
border:solid 0px white;
&&&{
    width:100%;
    height:400px;
    background-color:white;
    text-align:center;
    padding-bottom:80px;
    padding-top:10px;
    &>h6{
      font-family: 'Sacramento', cursive;
    font-weight: 400;
    font-size: 40px;
    text-align:center;
    margin-top:60px;
    color:#97c548;
    }
   &>div{
    
       width:100%;
       height:80%;
     
       margin-top: 30px;

      
       background-color:white;
       display:flex;
       justify-content:space-around;
       &>div{
       
       width:70%;
       height:80%;
       display:flex;
       justify-content:space-around;
       &>div{
margin-top:20px;

text-align: center;

height:300px;
width:200px;
    
    text-overflow: ellipsis;
    max-width: 70vw;
  margin: 1em auto;
    &>p:nth-child(3){
      text-align:center;
      
        line-height: 1.8em;
        font-size: 14px;
        line-height: 2em;
        font-family: 'Open Sans', sans-serif;
        font-family: var(--font-main), sans-serif;
        font-weight: 400;
    }
    &>p:nth-child(2){
      text-align:center;
      
    font-family: 'Fira Sans', serif;
    font-family: var(--font-headers), serif;
    font-weight: 700;
    -ms-word-wrap: break-word;
    word-wrap: break-word;
    }
&>div{
  
width:100px;
height:100px;
border-radius:100%;
background-color:#8ec138;
margin-left:50px;
&:hover{
   transition: all 0.5s;
   transform: rotateY(180deg);
}
&>img{
width:100%;
height:100%;
border-radius:100px;

}
}
       }
   }
   }
}
    
`
export const WeightLossMealPlan=()=>{
  
    class AutoPlayMethods extends Component {
        constructor(props) {
          super(props);
          this.play = this.play.bind(this);
          this.pause = this.pause.bind(this);
        }
        play() {
          this.slider.slickPlay();
        }
        pause() {
          this.slider.slickPause();
        }
        render() {
          const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500
          };
          return (
            <div>
         
              <Slider  className="Slider" ref={slider => (this.slider = slider)} {...settings}>
                <div>
                  <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/keto-360x244.jpg" alt="" />
                </div>
                <div>
                  <img src="https://www.fitmeals.co.in/wp-content/uploads/2019/10/DSC02724.jpg" alt="" />
                </div>
                <div>
                 <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/maintenance.jpg" alt="" />
                </div>
                <div>
                 <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/maintenance-360x244.jpg" alt="" />
                </div>
              </Slider>
              <div style={{ textAlign: "center" }}>
                
              </div>
            </div>
          );
        }
      }
      
      class AutoPlayMethods1 extends Component {
        constructor(props) {
          super(props);
          this.play = this.play.bind(this);
          this.pause = this.pause.bind(this);
        }
        play() {
          this.slider.slickPlay();
        }
        pause() {
          this.slider.slickPause();
        }
        render() {
          const settings = {
            
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 1700
          };
          return (
            <div>
         
              <Slider  className="Slider1" ref={slider => (this.slider = slider)} {...settings}>
                <div className="image-div" >
                  <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/8B7C0945-E90C-46E1-9B35-B67136929EDE-2.jpg" alt="" />
                </div>
                <div className="image-div">
                  <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/52383BDD-D644-454A-AC1D-50E2DF6B7AF6-2.jpg" alt="" />
                </div>
                <div className="image-div">
                 <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/6350561F-C9DA-4249-820B-74B62FA3E6D7-2-744x1024.jpg" alt="" />
                </div>
                <div className="image-div">
                 <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/F497D877-C665-4718-9D60-DC6884CF8F86-2.jpg" alt="" />
                </div>
                <div className="image-div">
                 <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/994FBF1F-9040-4E78-9F53-FBB220B51F33-576x1024.jpg" alt="" />
                </div>
                <div className="image-div">
                 <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/96C9BAE4-D634-416D-922A-C8E38B26FBD1-576x1024.jpg" alt="" />
                </div>
                <div className="image-div">
                 <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/9E384942-13E2-49D5-95C3-19C8F4E351A5-576x1024.jpg" alt="" />
                </div>
                <div className="image-div">
                 <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/6447D6C4-E45F-4108-B1FD-E4CFAE2886CA-576x1024.jpg" alt="" />
                </div>
                <div className="image-div">
                 <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/E92321D7-99A8-4343-ABE9-595C732CD6E4-3.jpg" alt="" />
                </div>
              </Slider>
              <div style={{ textAlign: "center" }}>
                
              </div>
            </div>
          );
        }
      }
    return <MainDiv>
        <div>
        <img src="https://www.fitmeals.co.in/wp-content/uploads/2018/02/inner-page.jpg" alt="" />
        </div>
        <div>
<h1 style={{color:"white"}}>Weight Loss Meal Plan</h1>
        </div>
    <div >
   <div>

       <div>
<p>
If your aim is to lose weight in a gradual, healthy manner then 
this diet would meet your requirements. The meals are well balanced and 
consist of complex carbohydrates, lean protein, healthy fats and generous portions
of fruits and vegetables which add all the essential vitamins, minerals and fibre to your diet.
<br />
<br />
Disclaimer: This isn’t going to be any type of a crash diet which will 
give you magical results; we’ll aim for 2-4kgs 
per month and all your meals will be designed by our nutritionists
 who focus not only on seeing results but also on ensuring that there’s 
 no compromise on your mental and physical health.
</p>
<button>View Sample Menu</button>
       </div>
       <div className="fj">
<h6>What our meals look <br /> like:</h6>

<  AutoPlayMethods></AutoPlayMethods>



       </div>
   </div>

    </div>
    <SecondDiv>
<h6>How Does It Work?</h6>
{
   
}
<div>
<div>
    <div>
        <div>
            <img src={got1} alt="" />
        </div>
   <p>Select your plan</p>
   <p>Choose the meal plan you want based on your preferences.</p>
    </div>
    <div>
    <div>
            <img src={got2} alt="" />
        </div>
        <p>Nutrition Support</p>
        <p>Our nutritionists will design your meals & will be available for further consultations.</p>
    </div>
    <div>
    <div>
            <img src={got3} alt="" />
        </div>
        <p>Home delivery</p>
        <p>Freshly prepared, hot meals will be delivered right at your doorstep.</p>
    </div>
    <div>
    <div>
            <img src={got4} alt="" />
        </div>
        <p>Enjoy your meal</p>
        <p>Microwave the food if needed then dig in!</p>
    </div>
</div>
</div>
</SecondDiv>
<div className="third">
<div>
  <h2>
    <span style={{color:"black"}}> Choose your ideal program</span>
  <br /><span style={{color:"black"}}> &</span> <br />

<span style={{color:"white"}}>get started!</span>
  </h2>
</div>
<div>
  <div className="fitclone_plans">
  <p> <span style={{color:"red"}}>1 week</span > <span style={{color:"black"}}>Plan</span> </p>
    <div style={{display:"flex"}}>
<img src={tick} alt="" />
<p>Freshly prepared meals</p>
    </div>
    <div style={{display:"flex"}}>
<img src={tick} alt="" />
<p>Home delivery</p>
    </div>
    <div style={{display:"flex"}}>
<img src={tick} alt="" />
<p>No refined sugars</p>
    </div>
    <div style={{display:"flex"}}>
<img src={tick} alt="" />
<p>Planned by nutritionists</p>
    </div>
    <div style={{display:"flex"}}>
<img src={tick} alt="" />
<p>Plan flexibility</p>
    </div>
    <button>order now</button>
  </div>
  <div>
  <p> <span style={{color:"red"}}>2 week</span > <span style={{color:"black"}}>Plan</span> </p>
    <div style={{display:"flex"}}>
<img src={tick} alt="" />
<p>Freshly prepared meals</p>
    </div>
    <div style={{display:"flex"}}>
<img src={tick} alt="" />
<p>Home delivery</p>
    </div>
    <div style={{display:"flex"}}>
<img src={tick} alt="" />
<p>No refined sugars</p>
    </div>
    <div style={{display:"flex"}}>
<img src={tick} alt="" />
<p>Planned by nutritionists</p>
    </div>
    <div style={{display:"flex"}}>
<img src={tick} alt="" />
<p>Plan flexibility</p>
    </div>
    <button>order now</button>
  </div>
  <div>
  <p> <span style={{color:"red"}}>3 week</span > <span style={{color:"black"}}>Plan</span> </p>
    <div style={{display:"flex"}}>
<img src={tick} alt="" />
<p>Freshly prepared meals</p>
    </div>
    <div style={{display:"flex"}}>
<img src={tick} alt="" />
<p>Home delivery</p>
    </div>
    <div style={{display:"flex"}}>
<img src={tick} alt="" />
<p>No refined sugars</p>
    </div>
    <div style={{display:"flex"}}>
<img src={tick} alt="" />
<p>Planned by nutritionists</p>
    </div>
    
    <div style={{display:"flex"}}>
<img src={tick} alt="" />
<p>Plan flexibility</p>
    </div>
    <button>order now</button>
  </div>
</div>
</div>
<div className="fourdiv">
  <h6>Weight-loss Diaries</h6>
<AutoPlayMethods1></AutoPlayMethods1>
</div>
<div className="finder">
<div className="fifthdiv">
<img src={gito} alt="" />
</div>
</div>

<div className="empspan">
   
</div>
    </MainDiv>
}