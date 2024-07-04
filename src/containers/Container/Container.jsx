import React from 'react';

const Container = ({ children }) => {
  return (
    <div className='container mx-auto px-4 flex flex-col xl:flex-row items-center justify-center flex-wrap gap-4 xl:gap-0'>
      {children}
    </div>
  );
};

export default Container;