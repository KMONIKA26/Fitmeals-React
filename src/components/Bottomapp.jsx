
import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";
import "./css/health_coaching.css"

import hc_btslider1 from "../assets/images/sliderApp_0.jpg"
import hc_btslider2 from "../assets/images/sliderApp_1.jpg"
import hc_btslider3 from "../assets/images/sliderApp_2.jpg"



export default class LazyLoad extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className="btmSlide">
        <Slider {...settings}>
        <div>
            <img src={ hc_btslider1 } alt="img01_app" width="400px"/>
        </div>
        <div>
            <img src={ hc_btslider2 } alt="img02_app" width="400px"/>
        </div>
        <div>
            <img src={ hc_btslider3 } alt="img03_app" width="400px"/>
        </div>
        </Slider>
      </div>
    );
  }
}