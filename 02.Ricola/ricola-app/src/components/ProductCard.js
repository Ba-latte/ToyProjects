// 제품 카드 리스트 컴포넌트

import '../css/ProductCard.css';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { randomNumBetween } from "../assets/utils";
import { useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';


function ProductCard() {
    // store에서 제품 데이터 가져오기
    const productDatas = useSelector((state)=>{return state.productsData});

    let navigate = useNavigate();

    function clickedItemData(data){
        console.log("클릭한 요소가 가지고 있는 제품 데이터!! ", data);
        
        localStorage.setItem("clickedItemData", JSON.stringify(data));
    }

    return (
    <Container className="card-product-container " fluid="md">
        <h2>전체 제품 리스트</h2>
        <Row xs={1} md={3} lg={4}>
        { productDatas.map((value, index)=>{
            return(
                <Col key={index}>
                    <Card className="card-product justify-content" key={index}>
                        <Card.Img className="card-product-img" variant="top" src={`https://picsum.photos/id/${randomNumBetween(11,30)}/850/400`} />
                        <Card.Body>
                            <Card.Title>{value.title}</Card.Title>
                            <Card.Text dangerouslySetInnerHTML={{ __html: value.desc }}></Card.Text>
                            <Button variant="primary" onClick={()=>{ 
                                navigate(`detail/${value.title.replaceAll(" ", "")}`);
                                clickedItemData(value);
                            }}>더보기</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })}
        </Row>
    </Container>
    );
}

export default ProductCard;
