import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/styles.css';

import hc_slider1 from "../assets/images/Slider01_hc.jpg"
import hc_slider2 from "../assets/images/Slider02_hc.jpg"
import hc_slider3 from "../assets/images/Slider03_hc.jpg"
import hc_slider4 from "../assets/images/Slider04_hc.jpg"


const AutoplaySlider = withAutoplay(AwesomeSlider);


 
const slider = (
    
    <AutoplaySlider   play={true}
    cancelOnInteraction={false}
    interval={3000}>
      <div>
          <img src={ hc_slider1 } alt="img01_hc"/>
      </div>
      <div>
      <img src={ hc_slider2 } alt="img02_hc"/>
      </div>
      <div>
      <img src={ hc_slider3 } alt="img03_hc"/>
      </div>
      <div>
      <img src={ hc_slider4 } alt="img04_hc"/>
      </div>
    </AutoplaySlider>
   
  );

  function Slider()
  {
     return (<div className='slider-total-width'>{slider}</div>)
  }
  export default Slider