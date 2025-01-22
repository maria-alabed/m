import React from 'react';
import Reservation from './components/reservation';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/Home';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <About/>
      <Home/>
      <Contact/>    
      <Reservation/> 
      <Footer/>
    </div>
  );
}
export default App;
