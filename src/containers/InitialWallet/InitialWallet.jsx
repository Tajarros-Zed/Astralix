import React from 'react';

const InitialWallet = ({ children, onSelect, isSelect }) => {
  return (
    <li className={isSelect ? 'bg-gradient-to-r from-[#cb33b2] to-[#7013e4] w-full flex flex-col rounded-3xl border border-[#3e4044] drop-shadow-[0_0_5px_#161620] transition-colors delay-200' : 'bg-[#282b2f] w-full flex flex-col rounded-3xl border border-[#3e4044] drop-shadow-[0_0_5px_#161620]'}>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
};

export default InitialWallet;