// 전체 배너 컴포넌트

import React, { useRef, useState } from 'react';
import './../css/Banner.css';
import { useSelector } from "react-redux";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { randomNumBetween } from '../assets/utils.js';

function Banner(){
    // 배너 슬라이드 데이터 store에서 가져오기
    let bannerSlideData = useSelector((state)=>{return state.bannerSlideData});
    console.log("store에서 꺼내온 데이터 : ", bannerSlideData);


    return(
    <>
        <Carousel className='card-container' data-bs-theme="dark">
            { bannerSlideData.map((val, idx)=>{
                return(
                    <Carousel.Item key={idx}>
                        <img className='card-img' src={`https://picsum.photos/id/${randomNumBetween(1,10)}/850/400`} />
                        <Carousel.Caption className='card-item'>
                            <Badge className='card-badge' bg="danger">{val.badge}</Badge>
                            <h3 className='card-tit'>{val.title}</h3>
                            <p className='card-desc' dangerouslySetInnerHTML={{ __html: val.desc }}></p>
                            { val.button3 !== "" && <Button variant="dark">{val.button3}</Button> }
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    </>
    )
}


export default Banner;
