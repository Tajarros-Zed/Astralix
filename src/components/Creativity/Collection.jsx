import React from 'react';
import InitialCollection from '../../containers/InitialCollection/InitialCollection';
import { collection } from './CollectionData';

import popular_image from '../../assets/collection_shibal.png';

const Collection = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='overflow-hidden relative top-0 left-0 rounded-2xl border border-[#3e4044]'>
        <img src={popular_image} className="h-auto w-full transition_image brightness-50" />
        <div className='absolute top-0 left-0 m-8'>
          <h3 className='headings text-[#eeeeee] text-xl font-semibold py-2'>Shibal Inu Coin</h3>
          <p className='paragraph text-[#838386] text-lg font-medium py-2'>Zedrick Tajarros</p>
        </div>
      </div>

      <ul className='overflow-hidden grid grid-cols-2 gap-4'>
        {collection.map((collectionItem) => (
          <InitialCollection key={collectionItem.token} {...collectionItem}/>
        ))}
      </ul>
    </div>
  );
};

export default Collection;