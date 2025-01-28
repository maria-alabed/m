import React from 'react';
import Reservation from './components/reservation';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/Home';
import Menu from './components/Menu';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
      <Header/> <About/>
      <BrowserRouter>
      <Routes> 
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='Reservation/' element={<Reservation/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;