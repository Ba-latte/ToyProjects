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
            "category" : "herb",
            "title" : "Peppermint And Mint",
            "desc" : "신선한 페퍼민트 향과 민트의 상쾌함이 어우러진 무설탕 캔디입니다. <br/>입안에서 상쾌한 민트 풍미를 느낄 수 있습니다.",
            "price" : 3500,
            "stock" : 10,
            "src" : "https://picsum.photos/250/250",
        },
        {
            "id" : 2,
            "category" : "herb",
            "title" : "Lemongrass GreenTea",
            "desc" : "레몬 그라스와 그린 티의 조화로운 맛이 특징인 무설탕 캔디입니다. <br/>상큼한 레몬과 고소한 그린 티의 맛을 즐기세요.",
            "price" : 2500,
            "stock" : 5,
            "src" : "https://picsum.photos/250/250",
        },
        {
            "id" : 3,
            "category" : "herb",
            "title" : "Lavender Herbs",
            "desc" : "평온한 라벤더 향이 입안을 감싸는 무설탕 캔디입니다. <br/>스트레스 해소와 함께 향기로운 맛을 느낄 수 있습니다.",
            "price" : 3000,
            "stock" : 15,
            "src" : "https://picsum.photos/250/250",
        },
        {
            "id" : 4,
            "category" : "herb",
            "title" : "Flavor Of Hibiscus",
            "desc" : "열대과일과 히비스커스의 과일향이 어우러진 무설탕 캔디입니다. <br/>상큼하고 달콤한 맛이 입안을 가득 채웁니다.",
            "price" : 2800,
            "stock" : 5,
            "src" : "https://picsum.photos/250/250",
        },
        {
            "id" : 5,
            "category" : "herb",
            "title" : "Peppermint Chamomile",
            "desc" : "페퍼민트와 캐모마일의 조화로운 향이 특징인 무설탕 캔디입니다. <br/>소화를 돕고 편안한 휴식을 제공합니다.",
            "price" : 2700,
            "stock" : 10,
            "src" : "https://picsum.photos/250/250",
        },
        {
            "id" : 6,
            "category" : "herb",
            "title" : "Orange Bubble Hub",
            "desc" : "오렌지 향과 버블 향이 어우러진 무설탕 캔디입니다. <br/>상쾌한 오렌지 맛과 거품감을 즐기세요.",
            "price" : 3900,
            "stock" : 15,
            "src" : "https://picsum.photos/250/250",
        },
        {
            "id" : 7,
            "category" : "herb",
            "title" : "Hibana Rosemary",
            "desc" : "히바나 라임과 로즈마리의 조화로운 맛이 특징인 무설탕 캔디입니다. <br/>신선하고 풍부한 맛을 느낄 수 있습니다.",
            "price" : 3400,
            "stock" : 15,
            "src" : "https://picsum.photos/250/250",
        },
        {
            "id" : 8,
            "category" : "herb",
            "title" : "Mojito Mint",
            "desc" : "클래식한 모히또 칵테일 맛을 즐길 수 있는 무설탕 캔디입니다. <br/>민트와 라임의 상쾌한 향기를 느끼세요.",
            "price" : 2700,
            "stock" : 5,
            "src" : "https://picsum.photos/250/250",
        },
        {
            "id" : 9,
            "category" : "herb",
            "title" : "Grapefruit Mint",
            "desc" : "자몽과 민트의 시원한 조화가 무설탕 캔디로 담겨 있습니다. <br/>상쾌한 시트러스 향을 느끼세요.",
            "price" : 3500,
            "stock" : 10,
            "src" : "https://picsum.photos/250/250",
        },
        {
            "id" : 10,
            "category" : "herb",
            "title" : "Berry And Lemon Balm",
            "desc" : "다양한 베리와 레몬의 조화로운 맛이 특징인 무설탕 캔디입니다. <br/>과일 풍미와 상큼한 레몬을 즐겨보세요.",
            "price" : 3000,
            "stock" : 10,
            "src" : "https://picsum.photos/250/250",
        },
        {
            "id" : 11,
            "category" : "fruit",
            "title" : "Apple Of My Eye",
            "desc" : "신선한 사과 과즙으로 만든 무설탕 캔디로, 상큼하고 과일 풍미를 즐기세요.",
            "price" : 2100,
            "stock" : 20,
            "src" : "https://picsum.photos/250/250",
        },
        {
            "id" : 12,
            "category" : "fruit",
            "title" : "Zesty Lemon Squeeze",
            "desc" : "진한 레몬 과즙 풍미가 입안에서 터지는 무설탕 캔디입니다. 톡톡 튀는 상쾌한 시트러스 맛을 느껴보세요.",
            "price" : 2000,
            "stock" : 15,
            "src" : "https://picsum.photos/250/250",
        },
        {
            "id" : 13,
            "category" : "fruit",
            "title" : "Strawberry Fizz",
            "desc" : "달콤한 딸기 과즙의 맛과 가벼운 탄산이 어우러진 무설탕 캔디입니다.",
            "price" : 3100,
            "stock" : 5,
            "src" : "https://picsum.photos/250/250",
        },
        {
            "id" : 14,
            "category" : "fruit",
            "title" : "Orange Burst",
            "desc" : "오렌지 과즙의 향긋한 풍미가 입안을 가득 채우는 무설탕 캔디입니다. <br/>오렌지 특유의 상큼함이 가득합니다.",
            "price" : 2300,
            "stock" : 20,
            "src" : "https://picsum.photos/250/250",
        },
        {
            "id" : 15,
            "category" : "fruit",
            "title" : "Blueberry Breeze",
            "desc" : "블루베리 과즙의 진한 맛과 상쾌한 바람을 느끼게 하는 무설탕 캔디입니다.",
            "price" : 2100,
            "stock" : 5,
            "src" : "https://picsum.photos/250/250",
        },
        {
            "id" : 16,
            "category" : "fruit",
            "title" : "Mango Tango",
            "desc" : "익은 망고의 달콤함과 특유의 맛을 담은 무설탕 캔디로, 열대과일의 향기가 풍겨옵니다.",
            "price" : 3200,
            "stock" : 15,
            "src" : "https://picsum.photos/250/250",
        },
        {
            "id" : 17,
            "category" : "fruit",
            "title" : "Peach Bliss",
            "desc" : "복숭아 과즙의 부드럽고 달콤한 풍미를 즐기게 해주는 무설탕 캔디입니다.",
            "price" : 3500,
            "stock" : 20,
            "src" : "https://picsum.photos/250/250",
        },
        {
            "id" : 18,
            "category" : "cocktail",
            "title" : "Piña Colada Dream",
            "desc" : "피나콜라다의 코코넛과 파인애플 풍미가 어우러진 무설탕 캔디입니다. <br/>휴양지에서의 휴식을 상상해보세요.",
            "price" : 3500,
            "stock" : 5,
            "src" : "https://picsum.photos/250/250",
        },
        {
            "id" : 19,
            "category" : "cocktail",
            "title" : "Blue Lagoon",
            "desc" : "블루 카라콜라 칵테일의 시원한 레몬라임과 블루 커라소를 담은 무설탕 캔디로, 상큼하고 즐거운 맛을 선사합니다.",
            "price" : 3000,
            "stock" : 10,
            "src" : "https://picsum.photos/250/250",
        },
        {
            "id" : 20,
            "category" : "cocktail",
            "title" : "Margarita Breeze",
            "desc" : "클래식한 마르가리따 칵테일의 진한 라임과 소금맛을 품은 무설탕 캔디로, 페스티브한 분위기를 연상시킵니다.",
            "price" : 3200,
            "stock" : 25,
            "src" : "https://picsum.photos/250/250",
        },
        {
            "id" : 21,
            "category" : "cocktail",
            "title" : "Frozen Berry Slushy",
            "desc" : "블루베리, 라즈베리, 스트로베리의 시원한 믹스를 담은 무설탕 캔디입니다. <br/>더운 날씨에 완벽한 간식입니다.",
            "price" : 3700,
            "stock" : 10,
            "src" : "https://picsum.photos/250/250",
        },
        {
            "id" : 22,
            "category" : "cocktail",
            "title" : "Classic Old Fashioned",
            "desc" : "고전 칵테일의 풍미를 담은 무설탕 캔디입니다. <br/>버번 위스키와 오렌지의 풍부한 맛을 즐겨보세요.",
            "price" : 2800,
            "stock" : 25,
            "src" : "https://picsum.photos/250/250",
        },
        {
            "id" : 23,
            "category" : "cocktail",
            "title" : "Peach Blush",
            "desc" : "복숭아와 파인애플의 달콤한 향기를 가진 무설탕 캔디입니다. <br/>여름의 해변 휴가를 상상하세요.",
            "price" : 2400,
            "stock" : 5,
            "src" : "https://picsum.photos/250/250",
        },
        {
            "id" : 24,
            "category" : "cocktail",
            "title" : "Caribbean Lime Delight",
            "desc" : "카리브해에서 영감을 받은 무설탕 캔디로, 라임과 코코넛의 조화로운 맛이 입안에서 느껴집니다.",
            "price" : 2000,
            "stock" : 15,
            "src" : "https://picsum.photos/250/250",
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