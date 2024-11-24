import React from 'react';
import a from './photos/123.jpg';
import b from './photos/9088.jpg';
import c from './photos/7.jpg';

const Rooms = () => {
  return (
<div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
<div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold' >Gorgeous Bottles</h3>
        <p className='pt-1' >
"Elegantly crafted bottles embody sophistication, enhancing your fragrance experience with style."
        </p>
      </div>
      <div className='grid grid-cols-3 col-span-3 gap-1' >
        <img  className='object-cover w-full h-full'
       src={a} alt="My Image" /> 
        
         
         <img className=' object-cover w-full h-full'  src={b} alt="My Image" /> 
        <img className=' row-span-1 object-cover w-full h-full'
       
       src={c} alt="My Image" /> 
      </div>
    </div>
  );
};

export default Rooms;

