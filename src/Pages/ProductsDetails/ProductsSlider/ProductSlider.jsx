import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../../Assests/productsDetails/1.png'
import image2 from '../../../Assests/productsDetails/2.jpg'
import image3 from '../../../Assests/productsDetails/3.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

// import productSliderCss from './productSlider.module.css'// requires a loader
import './productSlider.css'

const ProductSlider = () => {
    return (
        <Carousel className='main-slide' 
        // autoPlay
        >
        <div className="img-div">
          <img alt="" src={image1}  height="100%"  width="100%"/>
          
        </div>
        <div className="img-div">
          <img  height="100%" width="100%" alt="" src={image2} />
        
        </div>
        <div className="img-div">
          <img height="100%" width="100%" alt="" src={image3} />
      
        </div>
        <div className="img-div">
          <img alt="" src={image1}  height="100%"  width="100%"/>
          
        </div>
        <div className="img-div">
          <img  height="100%" width="100%" alt="" src={image2} />
        
        </div>
        <div className="img-div">
          <img height="100%" width="100%" alt="" src={image3} />
      
        </div>
        <div className="img-div">
          <img alt="" src={image1}  height="100%"  width="100%"/>
          
        </div>
        <div className="img-div">
          <img  height="100%" width="100%" alt="" src={image2} />
        
        </div>
        <div className="img-div">
          <img height="100%" width="100%" alt="" src={image3} />
      
        </div>
      </Carousel>
    );
};

export default ProductSlider;