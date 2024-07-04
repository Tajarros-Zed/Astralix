import React  from 'react';

const InitialTeam = ({ image, term, label }) => {
  return (
    <li className='list-none'>
      <div className='bg-[#282b2f] border border-[#3e4044] drop-shadow-[0_0_5px_#161620] flex flex-col justify-start p-8 rounded-2xl gap-4'>
        <img src={image} className="h-auto w-full aspect-square rounded-md" />
        <div className='w-full flex flex-col items-center justify-start gap-2'>
          <h2 className='heading bg-gradient-to-r from-[#cb33b2] to-[#7013e4] bg-clip-text text-transparent text-xl font-bold py-2'>{term}</h2>
          <h3 className='paragraph text-[#eee] text-base font-normal py-1'>{label}</h3>
        </div>
      </div>
    </li>
  );  
};

export default InitialTeam;