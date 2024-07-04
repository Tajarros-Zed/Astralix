import React from 'react';
import Container from '../../containers/Container/Container';
import astralix from '../../assets/astralix.png';

const Header = () => {
  return (
    <div className='w-full max-w-full fixed top-0 left-0 z-[1000] bg-[#212428] bg-opacity-75'>
      <Container>
        <div className="w-full py-4 flex flex-row items-center justify-between">
          <img src={astralix} className="h-auto w-[2rem]" />
          <h1 className='heading bg-gradient-to-r from-[#cb33b2] to-[#7013e4] py-1 px-4 rounded-full text-[#eeeeee] text-sm sm:text-base font-normal'>Coming Soon...</h1>
        </div>
      </Container>
    </div>
  );
};

export default Header;