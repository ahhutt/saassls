import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css";
import './Residencies.css';
import Data from '../utils/slider.json'; // Adjust the path based on your directory structure
import { sliderSettings } from '../utils/commont'; 
import { use } from 'react';

const Residencies = () => {
  return (
    <section className='r-wrapper'>
      <div className="padding innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings  }>
          <SilderButton />
          {Data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                {/* Assuming card has properties like title and image */}
                <img src={card.image} alt="card.title" />       
               <span className='secondarText r-price'>
               <span>$</span><span>{card.price}</span>
               </span>
               <span className='pprimaryText'>{card.name}</span>
               <span className='secondarText'>{card.detail}</span>

          
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
const  SilderButton = ()=>{
  const swiper = useSwiper();
  return (
    <div className='flexCenter r-button'>
      <button onClick={()=> swiper.slidePrev()} >&lt;</button>
      <button onClick={()=> swiper.slideNext()} >&gt;</button>
    </div>


  )
}