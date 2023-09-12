// 전체 배너 컴포넌트

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './../css/Banner.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { Button } from 'bootstrap';
import bannerData from '../assets/SlideData';
import { useSelector } from "react-redux";



function Banner(){
    // 배너 슬라이드 데이터 가져오기
    let bannerSlideData = useSelector((state)=>{return state.bannerSlideData});
    console.log("store에서 꺼내온 데이터 : ", bannerSlideData);

    let test = [0, 1, 2];

    return(
    <>
        <Swiper navigation={true} modules={[Navigation]} className="banner-main">
        {test.map((v, i)=>{
            <SwiperSlide><img src='./images/main.jpg' /></SwiperSlide>

        })
    }
            <SwiperSlide>
                <div className='slide'>
                    <h2 className='button-new'>{bannerSlideData[0].button1}</h2>
                    <h4 className='button-title'>{bannerSlideData[0].button2}</h4>
                    <span className='desc' dangerouslySetInnerHTML={{__html : bannerSlideData[0].desc}}></span>
                    {bannerSlideData[0].button3 != '' &&
                    <button className='button-view'></button>
                    }
                </div>
            </SwiperSlide>
        </Swiper>
    </>
    )
}


export default Banner;