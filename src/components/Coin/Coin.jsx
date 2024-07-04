import React from 'react';
import Container from '../../containers/Container/Container';
import Cards from '../../containers/Cards/Cards';
import { exploreItems } from './CoinsData';

const Coin = () => {
  return (
    <div className='w-full max-w-full flex flex-col items-center justify-center py-20'>
      <Container>
        <div className='flex flex-col justify-center text-center lg:text-left gap-12'>
          <div>
            <h3 className='paragraph text-base lg:text-2xl text-[#838386]'>Discover Trending Coins</h3>
            <h2 className='heading text-2xl lg:text-4xl bg-gradient-to-r from-[#cb33b2] to-[#7013e4] bg-clip-text text-transparent py-4 font-semibold'>Explore NFTs</h2>
            <span className='block mx-auto lg:mx-0 w-[50px] h-[2px] bg-gradient-to-r from-[#cb33b2] to-[#7013e4] mb-2'></span>
          </div>
          
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {exploreItems.map((items) => (
            <Cards key={items.id} {...items} />
          ))}
        </ul>
        </div>
        
      </Container>
    </div>
  );
};

export default Coin;