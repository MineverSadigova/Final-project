import { Route, Routes } from 'react-router-dom';
import './assets/css/global.scss/style.scss';

import Header from './assets/components/Header';
import Home from './assets/page/home/Home'; 
import Footer from './assets/components/Footer';
import About from './assets/page/about/About';
import Contact from './assets/page/contact/Contact';
import Stability from './assets/page/stability/Stability';
import Lahiye from './assets/page/proektler/Lahiye';
import Mekteb from './assets/page/school/Mekteb';
import Herbi from './assets/page/herbi/Herbi';
import Kechid from './assets/page/kechid/Kechid';
import Products from './assets/page/products/Products';
import Menu from './assets/components/Menu';
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/stability' element={<Stability/>}/>
        <Route path='/lahiye' element={<Lahiye/>}/>
        <Route path='/mekteb' element={<Mekteb/>}/>
        <Route path='/herbi' element={<Herbi/>}/>
        <Route path='/kechid' element={<Kechid/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/menu' element={<Menu/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App
