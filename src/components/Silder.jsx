import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; // Import AwesomeSlider's default styles
import Pic1 from '../assets/pic1.jpg';
import Pic2 from '../assets/pic2.jpg';
import Pic3 from '../assets/pic3.jpg';
import Pic4 from '../assets/pic4.jpg';
import Pic5 from '../assets/pic5.jpg';
const Slider = () => {
  return (
    <AwesomeSlider
      style={{
        '--slider-height-percentage': '35%',
        '--slider-transition-duration': '702ms',
        '--organic-arrow-thickness': '3px',
        '--organic-arrow-border-radius': '0px',
        '--organic-arrow-height': '20px',
        '--organic-arrow-color': '#d5d5d5',
        '--control-button-width': '8%',
        '--control-button-height': '25%',
        '--control-button-background': 'transparent',
    '--control-bullet-color': '#b0b0b0',
        '--control-bullet-active-color': '#0549a8',
        '--loader-bar-color': 'transparent',
        '--loader-bar-height': '1px'
      }}
    >
          <div className='bg-cover object-cover' data-src={Pic2} />
     <div className='bg-cover object-cover' data-src={Pic1} />
   
     <div className='bg-cover object-cover' data-src={Pic3} />
     <div className='bg-cover object-cover' data-src= {Pic4}/>
     <div className='bg-cover object-cover' data-src= {Pic5} />
      
    </AwesomeSlider>
  );
};

export default Slider;
