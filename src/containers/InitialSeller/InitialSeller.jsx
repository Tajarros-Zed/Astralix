import React from 'react';

const InitialSeller = ({ id, image, seller, coin }) => {
  return (
    <li className='w-full'>
      <div className='flex flex-row items-center justify-start gap-4'>
        <h2 className='heading text-[#838386] text-2xl font-semibold ms-6'>{id}</h2>
        <div className='rounded-full flex flex-col items-center justify-center bg-gradient-to-r from-[#cb33b2] to-[#7013e4]'>
          <img src={image} className="h-auto w-[4rem] xl:w-[3.5rem] 2xl:w-[4rem] aspect-square transition-transform delay-100 ease-out hover:scale-90" />
        </div>
        <div>
          <h3 className='heading text-[#eeeeee] text-base xl:text-sm 2xl:text-base font-medium'>{seller}</h3>
          <p className='paragraph text-[#838386] text-sm xl:text-xs 2xl:text-sm font-medium'>{coin}</p>
        </div>
      </div>
    </li>
  );
};

export default InitialSeller;