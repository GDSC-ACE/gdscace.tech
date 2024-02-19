import React, { Component } from 'react';
import '../../styles/global.css';

export default class Hero extends Component {
  render() {
    return (
      <section className='bg-black relative'>
        <img src='/assets/earth_top_corner.png' alt='earth_cornor' className=' absolute top-[-2%] left-[-2%]' />
        <header className='flex items-start p-[30px]  justify-center  md:justify-between'>
          <div className='flex items-start gap-[20px]'>
            <div className='flex items-start'>
              <img src='/assets/Group_5.svg' alt='logo' className='h-[45px]' />
              <img src='/assets/CE.svg' alt='logo_name' className='h-[30px]' />
            </div>
            <img src='/assets/Group_48.svg' alt='logo_name' className='h-[30px]' />
          </div>
          <div className='hidden md:flex justify-center items-center'>
            <img src='/assets/GDSC_ACE.png' alt='GDSC_ACE' className='h-[65px]' />
          </div>
        </header>
        <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 items-center justify-end'>
          <div className='text-white flex flex-col items-center gap-[40px] sm:max-w-[350px] justify-self-center md:justify-self-end'>
            <div className='flex flex-col items-center gap-[25px]'>
              <div className='font-bold font-sans text-6xl md:text-7xl'>
                <h1 className='glow'>ACE</h1>
                <h1 className='glow'>HACKS</h1>
              </div>
              <div className='border-l-2 border-yellow-500 max-w-[350px] pl-3'>
                <p className='text-justify'>Presenting, one of the biggest 24-hour Offline Hackathon of ACE</p>
              </div>
            </div>
            <div className='flex gap-2 text-2xl font-bold rounded-md border-2'>
              <button className='bg-transparent p-[5px] min-w-[150px]'>DEVFOLIO</button>
              <button className=' bg-yellow-500/75 p-[5px] rounded-r-md min-w-[150px]'>REGISTER NOW</button>
            </div>
          </div>
          <div className=' relative flex justify-center'>
            <img src='/assets/astronaut.png' alt='astronaut' className='max-h-[400px] animate-float z-10 relative' />
            <img src='/assets/moon_big.svg' alt='moon_big' className=' absolute bottom-[-30%] z-[0]' />
          </div>
        </div>
      </section>
    );
  }
}
