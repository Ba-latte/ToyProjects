import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from './Main';
import Layout from './Layout';
import Products from './Products';
import Detail from './Detail.js';

function App() {


  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Main/>} />
            <Route path='/' element={<Main />} />
            <Route path='/products' element={<Products />} >
              <Route path='All-Products' element={<Products />} />
              <Route path='Herb-Series' element={<h1>허브 시리즈 제품 리스트</h1>} />
              <Route path='Fruit-Series' element={<h1>과일 시리즈 제품 리스트</h1>} />
              <Route path='Cocktail-Series' element={<h1>칵테일 시리즈 제품 리스트</h1>} />
            </Route>

            <Route path='/detail/:id' element={<Detail />}>
            </Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
