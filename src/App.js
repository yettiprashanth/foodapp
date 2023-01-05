import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import './App.css'
import Home from './Home';
import Product from './Product';
import Contact from './Contact';
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Register' element={<Register/>}></Route>
    
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;

