import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import DiscountSection from './components/DiscountSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <DiscountSection />
      <Footer />
    </div>
  );
}

export default App;
