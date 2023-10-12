import { Outlet } from "react-router-dom";
import Navigation from "./Navbars";
import Footer from "./Footer";

function Layout(){
    return(
    <>
        {/* 1.헤더 영역 */}
        <header>
            <Navigation />
        </header>
        {/* 2.메인 영역 */}
        <main id="main">
            <Outlet />
        </main>
        {/* 3.푸터 영역 */}
        <Footer />
    </>
    )
}

export default Layout;