import { Outlet } from "react-router-dom";
import ProductCard from "./ProductCard";

function Products(props){
    console.log("products 컴포넌트에서의 카테고리 : ", props.series);
    return(
        <>
        <h1>
            제품 리스트 컴포넌트
        </h1>
        {
            // 각 시리즈별로 보여주기
            <ProductCard />
        }
        </>
    )
}

export default Products;