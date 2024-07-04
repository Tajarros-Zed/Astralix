import React from 'react';
import Container from '../../containers/Container/Container';
import Collection from './Collection';
import Seller from './Seller';

const Creativity = () => {
  return (
    <div className='bg-[#212428] w-full max-w-full flex flex-row items-center justify-center flex-wrap py-20'>
      <Container>
        <div className='w-full xl:w-[80%] xl:max-w-[80%] flex flex-col items-start justify-start gap-y-4 pe-0 lg:pe-4'>
          <h2 className='headings bg-gradient-to-r from-[#cb33b2] to-[#7013e4] bg-clip-text text-transparent text-2xl lg:text-4xl font-bold tracking-wide pt-3 text-center lg:text-left w-full'>Top Collections</h2>
          <span className='block mx-auto lg:mx-0 w-[50px] h-[2px] bg-gradient-to-r from-[#cb33b2] to-[#7013e4] mb-2'></span>
          <Collection />
        </div>

        <div className='w-full xl:w-[20%] xl:max-w-[20%] flex flex-col items-start justify-start gap-y-4 ps-0 lg:ps-4'>
          <h2 className='headings bg-gradient-to-r from-[#cb33b2] to-[#7013e4] bg-clip-text text-transparent text-2xl lg:text-4xl font-bold tracking-wide pt-2 text-center lg:text-left w-full'>Top Sellers</h2>
          <span className='block mx-auto lg:mx-0 w-[50px] h-[2px] bg-gradient-to-r from-[#cb33b2] to-[#7013e4] mb-2'></span>
          <Seller />
        </div>
      </Container>
    </div>
  );
};

export default Creativity;