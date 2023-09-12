import Banner from "./Banner";
import './../css/Main.css';

function Main(){
    return(
        <>
        {/* 1.배너 */}
        <section className="section-1">
            <Banner />
        </section>
        {/* 2.자사 홍보 섹션 */}
        <section className="section-2">
            <div className="custom-shape-divider-top-1693816556">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" className="shape-fill"></path>
                </svg>
            </div>
        </section>
        </>
    )
}

export default Main;