import React from 'react';
import { sellers } from './SellerData';
import InitialSeller from '../../containers/InitialSeller/InitialSeller';

const Seller = () => {
  return (
    <div className='w-full'>
      <ul className='w-full grid grid-cols-1 md:grid-cols-2 xl:flex xl:flex-col items-start justify-start gap-6 xl:gap-4 2xl:gap-[1.15rem]'>
        {sellers.map((sellersItem) => (
          <InitialSeller key={sellersItem.id} {...sellersItem} />
        ))}
      </ul>
    </div>
  );
};

export default Seller;