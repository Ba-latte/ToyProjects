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


function ProductCard(props) {
    console.log("지금 들어온 페이지의 카테고리는? : ", props.category);

    // store에서 제품 데이터 가져오기
    const productDatas = useSelector((state)=>{return state.productsData});

    // 가져온 제품 데이터에서 특정 카테고리만 골라서 새로운 배열 만들기
    let specificItems = props.category =="all" ? productDatas : productDatas.filter(it => it.category == props.category);
    console.log(props.category, "만 골라와 : ", specificItems);

    let navigate = useNavigate();

    function clickedItemData(data){
        console.log("클릭한 요소가 가지고 있는 제품 데이터!! ", data);
        
        localStorage.setItem("clickedItemData", JSON.stringify(data));
    }


    return (
    <Container className="card-product-container " fluid="md">
        <h2>{(props.category)} 제품 리스트</h2>
        <Row xs={1} md={3} lg={4}>
        {
        specificItems.map((value, index)=>{
            return(
                <Col key={index}>
                    <Card className="card-product justify-content" key={index}>
                        <Card.Img className="card-product-img" variant="top" src={`https://picsum.photos/id/${randomNumBetween(11,30)}/850/400`} />
                        <Card.Body>
                            <Card.Title>{value.title}</Card.Title>
                            <Card.Text dangerouslySetInnerHTML={{ __html: value.desc }}></Card.Text>
                            <Button variant="primary" onClick={()=>{ 
                                navigate(`/detail/${value.title.replaceAll(" ", "")}`);
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

// 디폴트 props 설정 : 컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용할 값 설정
ProductCard.defaultProps = {
    category: 'all'
};

export default ProductCard;
