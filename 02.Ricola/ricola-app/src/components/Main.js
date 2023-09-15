import Banner from "./Banner";
import './../css/Main.css';
import ProductCard from "./ProductCard";

function Main(){
    return(
        <div className="main-page">
        {/* 1.배너 */}
        <section className="section-1">
            <Banner />
        </section>
        {/* 2.제품 카드 리스트 섹션 */}
        <section className="section-2">
            <ProductCard />
        </section>
        </div>
    )
}

export default Main;