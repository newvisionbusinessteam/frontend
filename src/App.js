import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Home } from './pages/Home';
import { Outlets } from './pages/Outlets';
import About from './pages/About';
import Franchise from './pages/Franchise';
import { Order } from './pages/Order';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Header />
      <div className="pt-20"> 
        <Routes>
          <Route path="/" element={<div className="p-4"><Home/></div>} />
          <Route path="/outlets" element={<div className="p-4"><Outlets/></div>} />
          <Route path="/about" element={<div className="p-4"><About/></div>} />
          <Route path="/franchise" element={<div className="p-4"><Franchise/></div>} />
          <Route path="/order" element={<div className="p-4"><Order/></div>} />
        </Routes>

      </div>
      <Footer/>
    </Router>
  );
}

export default App;
