import React, { Component } from "react";
import Slider from "react-slick";

import "./css/clientdiaries.css"



export default class AutoPlayMethods extends Component {
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
      autoplaySpeed: 2000
    };
    return (
      <div className="matgin">
        
        <Slider ref={slider => (this.slider = slider)} {...settings} className="slider_div">
          <div className="image-tag">
              <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/8B7C0945-E90C-46E1-9B35-B67136929EDE-2.jpg" alt="" /></div>
          
          <div className="image-tag">
         <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/1A9918ED-6807-4364-A47A-A5C61958643A-2-787x1024.jpg" alt="" />
          </div>
          <div className="image-tag">
          <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/52383BDD-D644-454A-AC1D-50E2DF6B7AF6-2.jpg" alt="" />
          </div>
          <div className="image-tag">
          <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/6350561F-C9DA-4249-820B-74B62FA3E6D7-2-744x1024.jpg" alt="" />
          </div >
          <div className="image-tag">
          <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/F497D877-C665-4718-9D60-DC6884CF8F86-2-1.jpg" alt="" />
          </div>
          <div className="image-tag">
          <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/994FBF1F-9040-4E78-9F53-FBB220B51F33-576x1024.jpg" alt="" />
          </div>
          <div className="image-tag">
          <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/C9D86D56-9249-44DF-A880-4B8AAE01E952-576x1024.jpg" alt="" />
          </div >
          <div className="image-tag">
          <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/09/D6423578-EB78-42DD-9028-246290940A73-576x1024.jpg" alt="" />
          </div>
          
        </Slider>
        
      </div>
    );
  }
}