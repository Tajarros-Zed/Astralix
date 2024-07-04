import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Creativity from './components/Creativity/Creativity';
import Wallet from './components/Wallet/Wallet';
import Coin from './components/Coin/Coin';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';
import './App.css';


const App = () => {
  return (
    <div className='bg-[#212428] w-full max-w-full min-h-screen flex flex-col items-start justify-start flex-wrap'>
      <Header />
      <Hero />
      <Creativity />
      <Wallet />
      <Coin/>
      <Team />
      <Footer />
    </div>
  );
};

export default App;