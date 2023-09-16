import { Outlet } from "react-router-dom";

function Products(){
    return(
        <>
        <h1>
            제품 리스트 컴포넌트
        </h1>
        
        <Outlet />
        </>
    )
}

export default Products;