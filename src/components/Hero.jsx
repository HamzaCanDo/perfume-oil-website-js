import React from 'react';
import Myhero from '../components/photos/Front.jpg'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src={Myhero} alt="My Image "/>
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p>Exclusive</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            Premium Perfume Oil
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
           
"Indulge your senses with our exquisite perfume oils. Crafted with precision, our fragrances captivate and linger. Embrace luxury and confidence with every drop. Elevate your essence effortlessly."
          </p>
          <button className='bg-white text-black '>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;