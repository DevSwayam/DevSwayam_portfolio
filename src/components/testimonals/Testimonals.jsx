import React from 'react'
import "./testimonals.css"
import avr1 from '../../assets/avatar1.jpg'
import avr2 from '../../assets/avatar2.jpg'
import avr3 from '../../assets/avatar3.jpg'
import avr4 from '../../assets/avatar4.jpg'
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Testimonals = () => {
  return (
    <section id='testimonals' className='test'>
      <h5>ReView From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonals__container mySwiper'
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className='testimonal'>
          <div className='client__avtar'>
            <img src={avr1} alt="avtar" />
          </div>
          <h3 className='client__name'>Swayam karle</h3>
            <small className='cleint__review'>kuch bhi likhna tha 
            isliye likh raha hu pata nahi kya likhna thakuch bhi likhna tha 
            isliye likh raha hu pata nahi kya likhna thakuch bhi likhna tha 
            isliye likh raha hu pata nahi kya likhna thakuch bhi likhna tha 
            isliye likh raha hu pata nahi kya likhna tha</small>
        </SwiperSlide>

        <SwiperSlide className='testimonal'>
          <div className='client__avtar'>
            <img src={avr2} alt="avtar" />
          </div>
          <h3 className='client__name'>Swayam karle</h3>
            <small className='cleint__review'>kuch bhi likhna tha 
            isliye likh raha hu pata nahi kya likhna tha
            kuch bhi likhna tha 
            isliye likh raha hu pata nahi kya likhna tha
            kuch bhi likhna tha 
            isliye likh raha hu pata nahi kya likhna tha
            kuch bhi likhna tha 
            isliye likh raha hu pata nahi kya likhna tha</small>
        </SwiperSlide>

        <SwiperSlide className='testimonal'>
          <div className='client__avtar'>
            <img src={avr3} alt="avtar" />
          </div>
          <h3 className='client__name'>Swayam karle</h3>
            <small className='cleint__review'>kuch bhi likhna tha 
            isliye likh raha hu pata nahi kya likhna tha
            kuch bhi likhna tha 
            isliye likh raha hu pata nahi kya likhna tha
            kuch bhi likhna tha 
            isliye likh raha hu pata nahi kya likhna tha
            kuch bhi likhna tha 
            isliye likh raha hu pata nahi kya likhna tha</small>
        </SwiperSlide>

        <SwiperSlide className='testimonal'>
          <div className='client__avtar'>
            <img src={avr4} alt="avtar" />
          </div>
          <h3 className='client__name'>Swayam karle</h3>
            <small className='cleint__review'>kuch bhi likhna tha 
            isliye likh raha hu pata nahi kya likhna tha
            kuch bhi likhna tha 
            isliye likh raha hu pata nahi kya likhna tha
            kuch bhi likhna tha 
            isliye likh raha hu pata nahi kya likhna tha
            kuch bhi likhna tha 
            isliye likh raha hu pata nahi kya likhna tha</small>
        </SwiperSlide>
        
      </Swiper>
    </section>
  )
}

export default Testimonals