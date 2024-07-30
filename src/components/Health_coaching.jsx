import { React } from "react";

import Appslider from "./Appslider";
import BottomSlider from "./Bottomapp";



export const Health_coaching = ()=>{
    
    return(
        <div className="hCoach">
            <div className="hC_head">
                <div className="nav_bar">
                   {/* Add Nav bar here */}
                </div>
                <div className="hC_slide">
                    <Appslider/>
                </div>
                {/* Categories display for health coaching plan of fitmeals */}
                <div className="hC_catIcon">
                    <div className="hC_icon">
                        <div className="icon_img">
                            <img src="/icon_healthFocus.JPG" alt="icon01" width="75px"/>
                        </div>
                        <div className="cat_nm">Overall health Focus</div>
                    </div>
                    <div className="hC_icon">
                    <div className="icon_img">
                            <img src="/icon_dietPlan.JPG" alt="icon02" width="75px"/>
                        </div>
                        <div className="cat_nm">Customized Diet Plan</div>
                    </div>
                    <div className="hC_icon">
                    <div className="icon_img">
                            <img src="/icon_eatReci.JPG" alt="icon03" width="65px"/>
                        </div>
                        <div className="cat_nm">Easy Healthy Recipes</div>
                    </div>
                    <div className="hC_icon">
                    <div className="icon_img">
                            <img src="/icon_workoutPlan.JPG" alt="icon04" width="75px"/>
                        </div>
                        <div className="cat_nm">Workout Plans</div>
                    </div>
                    <div className="hC_icon">
                    <div className="icon_img">
                            <img src="/icon_bodyTranf.JPG" alt="icon05" width="75px"/>
                        </div>
                        <div className="cat_nm">Body Transformation</div>
                    </div>
                    <div className="hC_icon">
                    <div className="icon_img">
                            <img src="/icon_consult.JPG" alt="icon06" width="65px"/>
                        </div>
                        <div className="cat_nm">Weekly consultations</div>
                    </div>
                </div>
            </div>
            {/* Apponitment and Contact Information */}
            <div className="hC_appoint">
                <div className="appBox">
                    <div className="txtAppoint">
                        <div className="headTxt">
                            <h1>Book an appointment with <br />
                            your <span className="txt_headTxt">personal nutritionist</span></h1>
                        </div>
                        <div className="subTxt">
                            <p>Book a consultation session on the app with one of our nutritionists to discuss your health concerns and goals.</p>
                        </div>
                        <div className="contactTxt">
                            <div className="icon_imgC">
                                <img src={`${process.env.PUBLIC_URL}/icon_time.JPG`} alt="cont01" width="50px"/>
                            </div>
                            <div className="icon_txtC">
                                <h3>Every day from 12:00 PM to 10:00 PM</h3>
                            </div>
                            <div className="icon_imgC">
                                <img src={`${process.env.PUBLIC_URL}/icon_contact.JPG`} alt="cont02" width="50px"/>
                            </div>
                            <div className="icon_txtC">
                                <h3>+91 9100347489</h3>
                            </div>
                        </div>
                    </div>
                    <div className="imgAppoint">
                        <img src="/appointmentImg.jpg" alt="imgAppoint" />
                    </div>
                </div>
            </div>
            {/* How it Works */}
            <div className="hC_service">
                <div className="txtCalHead_service">
                    <p className="ser_txt"> Our Services </p>
                    <h1 className="ser_txth1">Let's change your life</h1>
                </div>
                <div className="box_service">
                    <div className="serBox_3">
                        <div className="imgBox">
                            <img src="/foodBox.jpg" alt="circleImg" className="imgSer_Cir" />
                        </div>
                        <div className="txtSer_box">
                            <h2>Nutrition Program</h2>
                            <p>Diet charts designed to help you reach your goals in a sustainable manner without using any crash diet approach.</p>
                        </div>
                        <div className="buttonRead">
                            <button type="button" className="button_RM">Read More</button>
                        </div>
                    </div>
                    <div className="serBox_3">
                        <div className="imgBox">
                            <img src="/workBox.jpg" alt="circleImg" className="imgSer_Cir"/>
                        </div>
                        <div className="txtSer_box">
                            <h2>Workout Program</h2>
                            <p>Easy workout routines designed according to your fitness levels with constant motivation to push yourself.</p>
                        </div>
                        <div className="buttonRead">
                            <button type="button" className="button_RM">Read More</button>
                        </div>
                    </div>
                    <div className="serBox_3">
                        <div className="imgBox">
                            <img src="/healthCoun.jpg" alt="circleImg" className="imgSer_Cir" />
                        </div>
                        <div className="txtSer_box">
                            <h2>Health Counselling</h2>
                            <p>30 minute consultations with any of our nutritionists every week to discuss your progress and problems.</p>
                        </div>
                        <div className="buttonRead">
                            <button type="button" className="button_RM">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hC_works">
                <div className="waveWork">
                    <img src={`${process.env.PUBLIC_URL}/wave.JPG`} alt="bg000" width="100%"/>
                </div>
                <div className="dw_workIcon">
                    <br />
                    <div className="headIcon_works">
                        <p className="ser_txt">How it Works</p>
                    </div>
                    <div className="iconWrk_grid">
                        <div className="Work_gridCss">
                            <img src="Wrk_1.png" alt="rotIcon1" className="img_IconWrk" width="70px" />
                        </div>
                        <div className="Work_line"></div>
                        <div className="Work_gridCss">
                            <img src="Wrk_2.png" alt="rotIcon2" className="img_IconWrk" width="70px" />
                        </div>
                        <div className="Work_line"></div>
                        <div className="Work_gridCss">
                            <img src="Wrk_3.png" alt="rotIcon3" className="img_IconWrk" width="70px" />
                        </div>
                        <div className="Work_line"></div>
                        <div className="Work_gridCss">
                            <img src="Wrk_4.png" alt="rotIcon4" className="img_IconWrk" width="70px" />
                        </div>
                    </div>
                    <div className="txtWork_IconBx">
                        <div className="subTxt_Wrk">
                            <h3>Download the app</h3>
                            <p>Click on the link and get on board our Fitmeals app</p>
                        </div>
                        <div className="subTxt_Wrk">
                            <h3>Book an appointment</h3>
                            <p>Our nutritionists will help find the right plan for you</p>
                        </div>
                        <div className="subTxt_Wrk">
                            <h3>Place an order</h3>
                            <p>Choose the plan the fits you well and place an order</p>
                        </div>
                        <div className="subTxt_Wrk">
                            <h3>Get started!</h3>
                            <p>Follow the diet and workout plans sent to you and begin your journey.</p> 
                        </div>
                    </div>                 
                </div>
            </div>
            {/* Customers status and numbers */}
            <div className="hC_achiev">
                <div className="iconachiev_grid">
                        <div className="achiev_gridCss">
                            <p>127</p>
                        </div>
                        <div className="achiev_line"></div>
                        <div className="achiev_gridCss">
                            <p>24</p>
                        </div>
                        <div className="achiev_line"></div>
                        <div className="achiev_gridCss">
                            <p>15</p>
                        </div>
                        <div className="achiev_line"></div>
                        <div className="achiev_gridCss">
                            <p>+520</p>
                        </div>
                    </div>
                    <div className="txtAch_IconBx">
                        <div className="subTxt_Ach">
                            <h3>Happy Customers</h3>
                        </div>
                        <div className="subTxt_Ach">
                            <h3>Nutrition Programs</h3>
                        </div>
                        <div className="subTxt_Ach">
                            <h3>Coaching Certificates</h3>
                        </div>
                        <div className="subTxt_Ach">
                            <h3>Coaching Certificates</h3>
                        </div>
                    </div> 
            </div>
            <div className="hC_appDet">
                <div className="imgApp_det">
                    <img src="appDet.jpg" alt="featuresApp" className="imgFA" width="60%" />
                </div>
                <div className="sliderImg_app">
                    <BottomSlider/>
                </div>
            </div>
            <div className="hC_gplayDet">
                <img src={`${process.env.PUBLIC_URL}/appStore_det.JPG`} alt="GPlay_det" width="85%"/>
            </div>
            <div className="footer_fitmeals">
                {/* Add Footer here */}
            </div>
        </div>
        
    )
}

