import React from 'react';
import { arrayOfSubHeadings, arrayOfParagraphs } from './Data';
import Container from '../../containers/Container/Container';
import hero_astra from '../../assets/hero_astra.png';

const setRandom = (max) => {
  return Math.floor(Math.random() * (max + 1))
}

const Hero = () => {
  const getSubHeadings = arrayOfSubHeadings[setRandom(3)];
  const getParagraphs = arrayOfParagraphs[setRandom(3)];

  return (
    <div className='parent-container w-full max-w-full min-h-screen flex flex-row items-center justify-center flex-wrap py-20'>
      <Container>
        <div className='w-full lg:flex-1 flex flex-col items-center justify-center'>
          <div className='text-center xl:text-left flex flex-col gap-4 items-center justify-center xl:items-start xl:justify-start'>
            <h3 className='heading text-[#838386] text-base sm:text-lg xl:text-xl font-semibold py-2'>{getSubHeadings}</h3>
            <h1 className='heading bg-gradient-to-r from-[#cb33b2] to-[#7013e4] bg-clip-text text-transparent text-4xl sm:text-6xl lg:text-8xl xl:text-[5.3rem] xl:leading-[7rem] 2xl:text-8xl 2xl:leading-[8rem]  text-center xl:text-left uppercase font-black py-4 tracking-wider'>Welcome to Astralix</h1>
            <p className='paragraph text-[#838386] text-sm sm:text-base xl:text-lg font-normal py-2 leading-10 lg:hidden xl:block'>{getParagraphs}</p>
          </div>
        </div>

        <div className='w-full lg:flex-1 flex flex-col items-center justify-center'>
          <img src={hero_astra} className="h-auto w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/2 animation" />
        </div>
      </Container>
    </div>
  );
};

export default Hero;