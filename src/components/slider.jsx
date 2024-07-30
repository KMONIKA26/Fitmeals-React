import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import styled from 'styled-components';
import 'react-awesome-slider/dist/styles.css';
import fitmealsslider1 from "../assets/images/fitmealsslider1.jpg"
import fitmealsslider3 from "../assets/images/SLIDE_03.jpg"
import fitmealsslider2 from "../assets/images/SLIDE_02.jpg"
import fitmealsslider4 from "../assets/images/SLIDE_04.jpg";
import  "./css/slider.css"



const AutoplaySlider = withAutoplay(AwesomeSlider);


 
const slider = (
    
    <AutoplaySlider   play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={2000}>
      <div>
          <img src={fitmealsslider1} alt="" />
      </div>
      <div>
      <img src={fitmealsslider2} alt="" />
      </div>
      <div>
      <img src={fitmealsslider3} alt="" />
      </div>
      <div>
      <img src={fitmealsslider4} alt="" />
      </div>
    </AutoplaySlider>
   
  );

  function Slider()
  {
     return (<div className='slider-total-width'>{slider}</div>)
  }
  export default Slider