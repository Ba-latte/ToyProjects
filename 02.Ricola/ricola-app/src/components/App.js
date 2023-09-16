import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from './Main';
import Layout from './Layout';
import Products from './Products';
import DetailPage from './DetailPage';
import { useSelector } from 'react-redux';

function App() {
  const productDatas = useSelector((state)=>{state.productsData});

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Main />} />
            <Route path='/home' element={<Main />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/all-products' element={<Products />} />
            {/* <Route path={`/detail`} element={<DetailPage />}>
              <Route path={'Peppermint and mint'} element={<Detail />} />
            </Route> */}
          </Route>
        </Routes>
    </div>
  );
}

export default App;
