import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; // Import AwesomeSlider's default styles
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
          <div className='bg-cover object-cover' data-src=".\src\assets\pic2.jpg" />
     <div className='bg-cover object-cover' data-src=".\src\assets\pic1.jpg" />
   
     <div className='bg-cover object-cover' data-src=".\src\assets\pic3.jpg" />
     <div className='bg-cover object-cover' data-src=".\src\assets\pic4.jpg" />
     <div className='bg-cover object-cover' data-src=".\src\assets\pic5.jpg" />
      
    </AwesomeSlider>
  );
};

export default Slider;
