import bannerData from "./SlideData.js";
import { configureStore, createSlice } from '@reduxjs/toolkit';



// 배너 슬라이드 데이터 state 만들기
let bannerSlideData = createSlice({
    name : "bannerSlideData",
    initialState : [
        {
            "button1" : 'O P E N',
            "button2" : 'HerbVista Sweets',
            "desc" : `우리는 건강한 간식을 새롭게 정의합니다. <br/>달콤함을 느끼면서도 건강을 생각하는 분들을 위해 무설탕 허브 캔디를 선보입니다. <br/>신선한 허브와 과일의 맛이 어우러진 이 간식은 자연의 향기와 맛을 즐기고 싶은 분들에게 딱 어울립니다. <br/>"허브비스타 스위츠"와 함께 건강한 즐거움을 맛보세요!`,
            "button3" : ''
        },
        {
            "button1" : 'N E W',
            "button2" : 'Lime Green',
            "desc" : `향긋한 라임과 상쾌한 로즈마리의 맛을 경험하세요. <br/>건강한 즐거움이 가득한 하루의 시작!`,
            "button3" : 'V I E W'
        },
        {
            "button1" : 'S P E C I A L',
            "button2" : 'Peppermint Chamomile',
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
            "id" : "1",
            "title" : "Peppermint and mint",

        }
    ]
})

// state 등록하기
export default configureStore({
    reducer: { 
        bannerSlideData : bannerSlideData.reducer
    }
}) 