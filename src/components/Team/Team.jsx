import React from 'react';
import { teams } from './TeamsData';
import Container from '../../containers/Container/Container';
import InitialTeam from '../../containers/InitialTeam/InitialTeam';


const Team = () => {
  return (
    <div className='w-full max-w-full flex flex-col items-center justify-center py-20 mb-12'>
      <Container>
        <div className='flex flex-col justify-center flex-wrap gap-12'>
          <div className='flex flex-col justify-end items-end text-center lg:text-right'>
            <h3 className='paragraph w-full text-base lg:text-2xl text-[#838386]'>The Visionaries Behind the Innovation</h3>
            <h2 className='heading w-full text-2xl lg:text-4xl bg-gradient-to-r from-[#cb33b2] to-[#7013e4] bg-clip-text text-transparent py-4 font-semibold'>Meet the Teams</h2>
            <span className='block mx-auto lg:mx-0 w-[50px] h-[2px] bg-gradient-to-r from-[#cb33b2] to-[#7013e4] mb-2'></span>
          </div>
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {teams.map((teamsItem) => (
              <InitialTeam key={teamsItem.title} {...teamsItem} />
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Team;