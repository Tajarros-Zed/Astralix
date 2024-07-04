import React from 'react';
import { useState } from 'react';

const Cards = ({ image, creator, item, seller, price }) => {
  const [ counter, setCounter ] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  }

  const handleDecrement = () => {
    setCounter(counter - 1);

    if(counter === 0) {
      setCounter(0);
    }
  }
  
  return (
    <li className='list-none'>
      <div className='animated_effects bg-[#282b2f] border border-[#3e4044] drop-shadow-[0_0_5px_#161620] flex flex-col justify-start p-8 rounded-2xl gap-4'>
        <img src={image} className="animated_nft h-auto w-full aspect-square rounded-md drop-shadow-[0_0_3px_#161620]" />
        <div className='w-full flex flex-row items-center justify-start'>
          <img src={creator} className="h-auto w-[4rem]" />
          <div className='w-full mx-4 mt-3 text-left'>
            <h2 className='heading animated_coin text-[#eee] text-base 2xl:text-xl font-bold'>{item}</h2>
            <h3 className='paragraph text-[#838386] text-xs 2xl:text-base font-normal'>{seller}</h3>
          </div>
        </div>
        <div className='w-full flex flex-row items-end justify-between'>
          <p className='paragraph text-[#838386] text-base font-normal'>Price: <span className='paragraph text-[#eee] text-base font-normal'>{price}</span></p>
          <div className='w-[100px] max-w-[100px] flex flex-row items-center justify-center gap-2 ps-4'>
            <button onClick={handleIncrement} className='paragraph bg-gradient-to-r from-[#cb33b2] to-[#7013e4] rounded-full px-2 text-[#eee] text-base font-normal'>+</button>
            <span className='px-2 paragraph text-[#eee] text-base font-normal'>{counter}</span>
            <button onClick={handleDecrement} className='paragraph bg-gradient-to-r from-[#cb33b2] to-[#7013e4] rounded-full px-2 text-[#eee] text-base font-normal'>-</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Cards;