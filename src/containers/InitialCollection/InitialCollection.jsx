import React from 'react';

const InitialCollection = ({ image, token,  creator }) => {
  return (
    <li>
      <div className='overflow-hidden relative top-0 left-0 rounded-xl border border-[#3e4044]'>
        <img src={image} className="h-auto w-full transition_image brightness-50" />
        <div className='absolute top-0 left-0 m-4 lg:m-8'>
          <h3 className='headings text-[#eeeeee] text-base md:text-xl font-semibold py-1'>{token}</h3>
          <p className='paragraph text-[#838386] text-sm md:text-lg font-medium'>{creator}</p>
        </div>
      </div>
    </li>
  );
};

export default InitialCollection;