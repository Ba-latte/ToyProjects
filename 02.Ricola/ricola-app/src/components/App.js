import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from './Main';
import Layout from './Layout';
import Products from './Products';
import Detail from './Detail';
import ProductCard from './ProductCard';

function App() {


  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Main/>} />
            <Route path='/' element={<Main />} />
            <Route path='/All-Products' element={<ProductCard />} />
            <Route path='/Herb-Series' element={<ProductCard category="herb" />} />
            <Route path='/Fruit-Series' element={<ProductCard category="fruit" />} />
            <Route path='/Cocktail-Series' element={<ProductCard category="cocktail" />} />

            <Route path='/detail/:id' element={<Detail />}>
            </Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
