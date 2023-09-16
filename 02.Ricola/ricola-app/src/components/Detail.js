// 각 제품 상세페이지 모듈 - Detail.js

import '../css/Detail.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function Detail(){
    const itemData = JSON.parse(localStorage.getItem("clickedItemData"));
    // console.log("방금 클릭한 요소가 가지고 있는 제품 데이터", itemData);

    let navigate = useNavigate();

    function toHome(){
        navigate('/');
    }
    function toCategory(){
        navigate('/products/Herb-Series');
    }

    // 탭에서 이동하기 위한 키 state
    const [key, setKey] = useState('home');


    return(
    <section id='detail-section'>
        {/* 제품 간략 설명 박스 */}
        <div className='brief-desc-container'>
            {/* 이미지 박스 */}
            <div className="image-container">
                <img src='https://picsum.photos/400/400'/>
            </div>
            {/* 설명 박스 */}
            <div className="item-description-container">
                <h1>각 제품 설명</h1>
                <div className="lnb-container">
                    <span className='1th-link' onClick={toHome}>Home</span>
                    <span className='break-point'>/</span>
                    <span className='2th-link' onClick={toCategory}>{itemData.category + ' Series'}</span>
                    <span className='break-point'>/</span>
                    <span className='3th-link'>{itemData.title}</span>
                </div>
                <h3 className="item-title">{itemData.title}</h3>
                <div className="item-price">{itemData.price}원</div>
                <div className="item-desc" dangerouslySetInnerHTML={ {__html : itemData.desc} }></div>
                <div className='item-stock'>
                    <span>{itemData.stock}</span>
                    <span>개</span>
                </div>
            </div>
        </div>
        {/* 제품 상세 설명 탭 박스 */}
        <div className='detailed-desc-container'>
            <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            >
            <Tab eventKey="Description" title="Description">
                상세 보기 탭
            </Tab>
            <Tab eventKey="Additional Information" title="Additional Information">
                추가 설명 탭
            </Tab>
            <Tab eventKey="Reviews" title="Reviews" disabled>
                Tab content for Contact
            </Tab>
            </Tabs>
        </div>

    </section>
    )
}

export default Detail;