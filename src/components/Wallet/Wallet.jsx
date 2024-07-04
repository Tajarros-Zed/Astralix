import React from 'react';
import { useState } from 'react';
import { wallet, supportWallet } from './Data';
import Container from '../../containers/Container/Container';
import InitialWallet from '../../containers/InitialWallet/InitialWallet';


const Wallet = () => {
  const [ selectedWallet, setSelectedWallet ] = useState(null);

  const handleSelect = (selectedButton) => {
    setSelectedWallet(selectedButton);
  }

  return (
    <div className='w-full max-w-full flex flex-col items-center justify-center py-20'>
      <Container>
        <div className='w-full text-center flex flex-col flex-wrap gap-12'>
          <div>
            <h3 className='paragraph text-base md:text-lg lg:text-2xl text-[#838386]'>Your Gateway to the NFT Universe</h3>
            <h2 className='heading text-2xl lg:text-4xl bg-gradient-to-r from-[#cb33b2] to-[#7013e4] bg-clip-text text-transparent py-4 font-semibold'>Supported Wallet</h2>
            <span className='block mx-auto w-[50px] h-[2px] bg-gradient-to-r from-[#cb33b2] to-[#7013e4] mb-2'></span>
          </div>
          
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 xl:grid-cols-6'>
            <InitialWallet isSelect={selectedWallet === 'metamask'} onSelect={() => handleSelect('metamask')}>
              <div className='flex flex-col items-center justify-center gap-4 py-6 hover:bg-[#1C1E21] rounded-3xl'>
                <img src={wallet.metamask} className="h-auto w-[6rem]" />
                <p className='headings w-full text-[#eeeeee] text-lg font-semibold'>{wallet.id1}</p>
              </div>
              
            </InitialWallet>

            <InitialWallet isSelect={selectedWallet === 'robinhood'} onSelect={() => handleSelect('robinhood')}>
              <div className='flex flex-col items-center justify-center gap-4 py-6 hover:bg-[#1C1E21] rounded-3xl'>
                <img src={wallet.robinhood} className="h-auto w-[6rem]" />
                <p className='headings w-full text-[#eeeeee] text-lg font-semibold'>{wallet.id2}</p>
              </div>
              
            </InitialWallet>

            <InitialWallet isSelect={selectedWallet === 'coinbase'} onSelect={() => handleSelect('coinbase')}>
              <div className='flex flex-col items-center justify-center gap-4 py-6 hover:bg-[#1C1E21] rounded-3xl'>
                <img src={wallet.coinbase} className="h-auto w-[6rem]" />
                <p className='headings w-full text-[#eeeeee] text-lg font-semibold'>{wallet.id3}</p>
              </div>
              
            </InitialWallet>

            <InitialWallet isSelect={selectedWallet === 'exodus'} onSelect={() => handleSelect('exodus')}>
              <div className='flex flex-col items-center justify-center gap-4 py-6 hover:bg-[#1C1E21] rounded-3xl'>
                <img src={wallet.exodus} className="h-auto w-[6rem]" />
                <p className='headings w-full text-[#eeeeee] text-lg font-semibold'>{wallet.id4}</p>
              </div>
              
            </InitialWallet>

            <InitialWallet isSelect={selectedWallet === 'cobo'} onSelect={() => handleSelect('cobo')}>
              <div className='flex flex-col items-center justify-center gap-4 py-6 hover:bg-[#1C1E21] rounded-3xl'>
                <img src={wallet.cobo} className="h-auto w-[6rem]" />
                <p className='headings w-full text-[#eeeeee] text-lg font-semibold'>{wallet.id5}</p>
              </div>
              
            </InitialWallet>

            <InitialWallet isSelect={selectedWallet === 'binance'} onSelect={() => handleSelect('binance')}>
              <div className='flex flex-col items-center justify-center gap-4 py-6 hover:bg-[#1C1E21] rounded-3xl'>
                <img src={wallet.binance} className="h-auto w-[6rem]" />
                <p className='headings w-full text-[#eeeeee] text-lg font-semibold'>{wallet.id6}</p>
              </div>
            </InitialWallet>
          </div>
        </div>

        {!selectedWallet ? (null) : (<div className='flex flex-col lg:flex-row items-center justify-center mt-12 gap-8'>
          <div className='flex flex-1 flex-col justify-center gap-4 text-center lg:text-left'>
            <h2 className='heading bg-gradient-to-r from-[#cb33b2] to-[#7013e4] bg-clip-text text-transparent text-2xl lg:text-4xl font-semibold py-2'>{supportWallet[selectedWallet].coin}</h2>
            <p className='paragraph text-[#838386] text-sm sm:text-lg font-medium leading-7 sm:leading-10 py-2 lg:py-4'>{supportWallet[selectedWallet].description}</p>
            <p className='heading mx-auto lg:mx-0 w-2/3 sm:w-1/4 lg:w-1/3 bg-gradient-to-r from-[#cb33b2] to-[#7013e4] text-[#eee] text-base lg:text-lg font-medium py-4 text-center rounded-md'>{supportWallet[selectedWallet].download}</p>
          </div>

          <div className='flex flex-1 items-center justify-center 2xl:overflow-hidden'>
            <img src={supportWallet[selectedWallet].image} className="h-auto w-3/4 drop-shadow-[0_0_5px_#161620] phone_animation" />
          </div>
        </div>
      )}
      </Container>
    </div>
  );
};

export default Wallet;