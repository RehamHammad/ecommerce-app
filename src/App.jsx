import React from 'react';
import Home from './component/Home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Navbar from './component/Navbar/Navbar';
import Login from './component/buttons/Login/Login';
import Register from './component/buttons/Register/Register';
import Collection from './component/Collection/Collection';
import Footer from './component/Footer/Footer';
import { Routes,Route } from 'react-router-dom';
import Notfound from './component/Notfound/Notfound';
import Cart from './component/buttons/Cart/Cart';
import Details from './component/Details';

export default function App() {
  return (
    <>
    <Navbar/>
   
    <Routes>
    <Route path='/' element={<Home/>} ></Route>
      <Route path='home' element={<Home/>} ></Route>
      <Route path='collection' element={<Collection/>} ></Route>
      <Route path='about' element={<About/>} ></Route>
      <Route path='contact' element={ <Contact/>} ></Route>
      <Route path='details' element={ <Details/>} ></Route>
      <Route path='login' element={<Login/>} ></Route>
      <Route path='register' element={ <Register/>} ></Route>
      <Route path='cart' element={ <Cart/>} ></Route>
      <Route path='*' element={<Notfound/>} ></Route>
    </Routes>
   <Footer/>
    </>
  )
}

