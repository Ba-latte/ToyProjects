import bannerData from "./SlideData.js";
import { configureStore, createSlice } from '@reduxjs/toolkit';



// 배너 슬라이드 데이터 state 만들기
let bannerSlideData = createSlice({
    name : "bannerSlideData",
    initialState : [
        {
            "badge" : 'O P E N',
            "title" : 'HerbVista Sweets',
            "desc" : `우리는 건강한 간식을 새롭게 정의합니다. <br/>달콤함을 느끼면서도 건강을 생각하는 분들을 위해 무설탕 허브 캔디를 선보입니다. <br/>신선한 허브와 과일의 맛이 어우러진 이 간식은 자연의 향기와 맛을 즐기고 싶은 분들에게 딱 어울립니다. <br/>"허브비스타 스위츠"와 함께 건강한 즐거움을 맛보세요!`,
            "button3" : ''
        },
        {
            "badge" : 'N E W',
            "title" : 'Lime Green',
            "desc" : `향긋한 라임과 상쾌한 로즈마리의 맛을 경험하세요. <br/>건강한 즐거움이 가득한 하루의 시작!`,
            "button3" : 'V I E W'
        },
        {
            "badge" : 'S P E C I A L',
            "title" : 'Peppermint Chamomile',
            "desc" : `페퍼민트와 캐모마일의 조화로운 향이 특징인 무설탕 캔디입니다. <br/>소화를 돕고 편안한 휴식을 제공합니다.`,
            "button3" : 'V I E W'
        }
    ]
});

// 제품 데이터 state 만들기
let productsData = createSlice({
    name : "productsData",
    initialState : [
        {
            "id" : 1,
            "title" : "Peppermint and mint",
            "desc" : "신선한 페퍼민트 향과 민트의 상쾌함이 어우러진 무설탕 캔디입니다. <br/>입안에서 상쾌한 민트 풍미를 느낄 수 있습니다.",
            "price" : 3500,
            "stock" : 10
        },
        {
            "id" : 2,
            "title" : "Lemon grass green tea",
            "desc" : "레몬 그라스와 그린 티의 조화로운 맛이 특징인 무설탕 캔디입니다. <br/>상큼한 레몬과 고소한 그린 티의 맛을 즐기세요.",
            "price" : 2500,
            "stock" : 5
        },
        {
            "id" : 3,
            "title" : "Lavender herbs",
            "desc" : "평온한 라벤더 향이 입안을 감싸는 무설탕 캔디입니다. <br/>스트레스 해소와 함께 향기로운 맛을 느낄 수 있습니다.",
            "price" : 3000,
            "stock" : 15
        },
        {
            "id" : 4,
            "title" : "Flavor of hibiscus",
            "desc" : "열대과일과 히비스커스의 과일향이 어우러진 무설탕 캔디입니다. <br/>상큼하고 달콤한 맛이 입안을 가득 채웁니다.",
            "price" : 2800,
            "stock" : 5
        },
        {
            "id" : 5,
            "title" : "Peppermint chamomile",
            "desc" : "페퍼민트와 캐모마일의 조화로운 향이 특징인 무설탕 캔디입니다. <br/>소화를 돕고 편안한 휴식을 제공합니다.",
            "price" : 2700,
            "stock" : 10
        },
        {
            "id" : 6,
            "title" : "Orange Bubble Hub",
            "desc" : "오렌지 향과 버블 향이 어우러진 무설탕 캔디입니다. <br/>상쾌한 오렌지 맛과 거품감을 즐기세요.",
            "price" : 3900,
            "stock" : 15
        },
        {
            "id" : 7,
            "title" : "Hibana Rosemary",
            "desc" : "히바나 라임과 로즈마리의 조화로운 맛이 특징인 무설탕 캔디입니다. <br/>신선하고 풍부한 맛을 느낄 수 있습니다.",
            "price" : 3400,
            "stock" : 15
        },
        {
            "id" : 8,
            "title" : "Mojito mint",
            "desc" : "클래식한 모히또 칵테일 맛을 즐길 수 있는 무설탕 캔디입니다. <br/>민트와 라임의 상쾌한 향기를 느끼세요.",
            "price" : 2700,
            "stock" : 5
        },
        {
            "id" : 9,
            "title" : "Grapefruit mint",
            "desc" : "자몽과 민트의 시원한 조화가 무설탕 캔디로 담겨 있습니다. <br/>상쾌한 시트러스 향을 느끼세요.",
            "price" : 3500,
            "stock" : 10
        },
        {
            "id" : 10,
            "title" : "Berry and lemon balm",
            "desc" : "다양한 베리와 레몬의 조화로운 맛이 특징인 무설탕 캔디입니다. <br/>과일 풍미와 상큼한 레몬을 즐겨보세요.",
            "price" : 3000,
            "stock" : 10
        },
    ]
})

// state 등록하기
export default configureStore({
    reducer: { 
        bannerSlideData : bannerSlideData.reducer,
        productsData : productsData.reducer
    }
}) 