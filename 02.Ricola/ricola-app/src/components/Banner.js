// 전체 배너 컴포넌트

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../css/Banner.css';

// import required modules
import { Navigation } from 'swiper/modules';



function Banner(){
    return(
        <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <img src='./images/main.jpg' alt='main image' />
            </SwiperSlide>
            <SwiperSlide>
                <img src='./images/main.jpg' alt='main image' />
            </SwiperSlide>
            <SwiperSlide>
                <img src='./images/main.jpg' alt='main image' />
            </SwiperSlide>
        </Swiper>
        </>
    )
}

export default Banner;