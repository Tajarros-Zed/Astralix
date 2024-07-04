import React from 'react';
import Container from '../../containers/Container/Container';

import astralix from '../../assets/astralix.png';

const Footer = () => {
  return (
    <div className='bg-[#282b2f] border-t border-[#3e4044] w-full max-w-full flex flex-col items-center justify-center pt-20'>
      <Container>
        <div className='w-full flex flex-col xl:flex-row my-4 items-center justify-center xl:items-end xl:justify-end gap-4'>
          <div className='flex flex-1 flex-col text-center xl:text-left'>
            <h2 className='heading text-2xl bg-gradient-to-r from-[#cb33b2] to-[#7013e4] bg-clip-text text-transparent uppercase py-4 font-semibold'>Astralix</h2>
            <h3 className='paragraph text-[#eee] text-base lg:text-lg font-normal py-0 lg:py-2'>Not affiliated with any crypto websites.</h3>
          </div>

          <div className='flex flex-1 flex-col text-center xl:text-right'>
            <h2 className='paragraph text-[#838386] text-base lg:text-lg font-normal py-0 lg:py-4'>Email: dev.tajarroszed@gmail.com</h2>
            <h3 className='paragraph text-[#838386] text-base lg:text-lg font-normal py-0 lg:py-2'>Contact: 09455702579</h3>
          </div>
        </div>

        <div className='w-full flex flex-col xl:flex-row items-center justify-center xl:justify-start gap-4 xl:gap-12 my-4 text-center'>
          <img src={astralix} className="h-auto w-[3rem]" />
          <p className='paragraph text-[#eee] text-base font-normal py-2 tracking-normal lg:tracking-widest'>Copyright © Astralix NFT 2024 | All rights reserved.</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;